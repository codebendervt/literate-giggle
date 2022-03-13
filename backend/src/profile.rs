use ic_cdk::export::{candid::{CandidType, Deserialize}};
use ic_cdk::storage;
use ic_cdk_macros::*;
use std::collections::BTreeMap;


// implementation to user internet computer identity
// type IdStore = BTreeMap<String, Principal>;
type ProfileStore = BTreeMap<String, Profile>;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
struct Profile {
    pub name: String,
    pub description: String,
    pub keywords: Vec<String>,
}


#[query]
fn get(id:String) -> Profile {
    // let id_store = storage::get::<IdStore>();
    let profile_store = storage::get::<ProfileStore>();

    profile_store
        .get(&id)
        .cloned()
        .unwrap_or_else(|| Profile::default())
   
}

#[update]
fn update(id:String, profile: Profile) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let profile_store = storage::get_mut::<ProfileStore>();

    // profile_store.insert(id, principal_id.clone());
    profile_store.insert(id, profile);
}


// #[query]
// fn search(text: String) -> Option<&'static Profile> {
//     let text = text.to_lowercase();
//     let profile_store = storage::get::<ProfileStore>();

//     for (_, p) in profile_store.iter() {
//         if p.name.to_lowercase().contains(&text) || p.description.to_lowercase().contains(&text) {
//             return Some(p);
//         }

//         for x in p.keywords.iter() {
//             if x.to_lowercase() == text {
//                 return Some(p);
//             }
//         }
//     }

//     None
// }

// #[query(name = "getSelf")]
// fn get_self() -> Profile {
//     let id = ic_cdk::caller();
//     let profile_store = storage::get::<ProfileStore>();

//     profile_store
//         .get(&id)
//         .cloned()
//         .unwrap_or_else(|| Profile::default())
// }