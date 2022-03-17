use ic_cdk::export::{candid::{CandidType, Deserialize}};
use ic_cdk::storage;
use ic_cdk_macros::*;
use std::collections::BTreeMap;
use chrono::{DateTime, NaiveDateTime, Utc};

// implementation to user internet computer identity
// type IdStore = BTreeMap<String, Principal>;
type ProductStore = BTreeMap<String, Product>;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
struct Product {
    #[serde(default)]
    pub product: String,
    #[serde(default)]
    pub graph: Vec<String>,
    #[serde(default)]
    pub last_update: i64,
}



#[query]
fn get_product(id:String) -> Product {
    // let id_store = storage::get::<IdStore>();
    let product_store = storage::get::<ProductStore>();

    product_store
        .get(&id)
        .cloned()
        .unwrap_or_else(|| Product::default())

}

#[query]
fn get_all_product() ->  Vec<Product> {
    // let id_store = storage::get::<IdStore>();
    let product_store = storage::get::<ProductStore>();

    let results  = product_store.values().cloned().collect();

    return results;
}

#[update]
fn update_product(id:String, mut product: Product) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let product_store = storage::get_mut::<ProductStore>();
    let dt = DateTime::<Utc>::from_utc(NaiveDateTime::from_timestamp(61, 0), Utc);
    product.last_update = dt.timestamp();

    // profile_store.insert(id, principal_id.clone());
    product_store.insert(id, product);
}

#[update]
fn remove_product(id:String) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let product_store = storage::get_mut::<ProductStore>();

    // profile_store.insert(id, principal_id.clone());
    product_store.remove(&id);
}

#[query]
fn product_exist(id: String) -> bool{

    let store = storage::get::<ProductStore>();

    let is_product = store.contains_key(&id);

    return is_product;
}


#[derive(CandidType, Deserialize, Default)]
pub struct StoreProduct {
    store: BTreeMap<String, Product>
}


#[pre_upgrade]
fn pre_upgrade() {
    // let product_store = storage::get::<ProductStore>();

    let store_product = StoreProduct { store: storage::get::<ProductStore>().clone()};
    let state_bytes = candid::encode_one(store_product).expect("Failed to serialize state");
    let encoded_bytes = candid::encode_args((state_bytes,)).unwrap();


    // let keys: Vec<String> = product_store.into_keys().collect();
    // let results: Vec<Product>  = product_store.values().cloned().collect();


    storage::stable_save((encoded_bytes,)).expect("Failed saving bytes to stable memory");
}

#[post_upgrade]
fn post_upgrade() {
    ic_cdk::setup();
    //
    let (stable_bytes,): (Vec<u8>,) =
        ic_cdk::storage::stable_restore().expect("Failed to read from stable memory");
    //
    let (decoded_bytes,): (Vec<u8>,) =
        candid::decode_args(&stable_bytes,).expect("Failed to deserialize stable memory");


    let store_product : StoreProduct = candid::decode_one(&decoded_bytes).expect("Failed to deserialize state");


    //
    for (key,value) in store_product.store.iter(){
        storage::get_mut::<ProductStore>().insert(key.to_string(),value.clone());
    }
}
