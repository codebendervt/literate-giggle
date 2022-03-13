use ic_cdk::export::{candid::{CandidType, Deserialize}};
use ic_cdk::storage;
use ic_cdk_macros::*;
use std::collections::BTreeMap;
use chrono::{DateTime, NaiveDateTime, Utc};

// implementation to user internet computer identity
// type IdStore = BTreeMap<String, Principal>;
type DataStore = BTreeMap<String, Data>;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
struct Data {
    #[serde(default)]
    pub data: String,
    #[serde(default)]
    pub graph: Vec<String>,
    #[serde(default)]
    pub last_update: i64,
}



#[query]
fn get_data(id:String) -> Data {
    // let id_store = storage::get::<IdStore>();
    let data_store = storage::get::<DataStore>();

    data_store
        .get(&id)
        .cloned()
        .unwrap_or_else(|| Data::default())

}

#[query]
fn get_all_data() ->  Vec<Data> {
    // let id_store = storage::get::<IdStore>();
    let data_store = storage::get::<DataStore>();

    let results  = data_store.values().cloned().collect();

    return results;
}

#[update]
fn update_data(id:String, mut data: Data) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let data_store = storage::get_mut::<DataStore>();
    let dt = DateTime::<Utc>::from_utc(NaiveDateTime::from_timestamp(61, 0), Utc);
    data.last_update = dt.timestamp();

    // profile_store.insert(id, principal_id.clone());
    data_store.insert(id, data);
}

#[update]
fn remove_data(id:String) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let data_store = storage::get_mut::<DataStore>();

    // profile_store.insert(id, principal_id.clone());
    data_store.remove(&id);
}

#[query]
fn data_exist(id: String) -> bool{

    let store = storage::get::<DataStore>();

    let is_data = store.contains_key(&id);

    return is_data;
}


#[derive(CandidType, Deserialize, Default)]
pub struct StoreData {
    store: BTreeMap<String, Data>
}


#[pre_upgrade]
fn pre_upgrade() {
    // let product_store = storage::get::<ProductStore>();

    let store_data = StoreData { store: storage::get::<DataStore>().clone()};
    let state_bytes = candid::encode_one(store_data).expect("Failed to serialize state");
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


    let store_data : StoreData = candid::decode_one(&decoded_bytes).expect("Failed to deserialize state");


    //
    for (key,value) in store_data.store.iter(){
        storage::get_mut::<DataStore>().insert(key.to_string(),value.clone());
    }
}
