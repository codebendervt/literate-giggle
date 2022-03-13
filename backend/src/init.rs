use ic_cdk_macros::*;
 
#[query]
fn greeting(_name: String) -> String {
    return "Hello ".to_owned() +&_name+ &" from DFINITY!".to_string();
}


#[query]
fn leaving(_name: String) -> String {
 
    return "Goodbye ".to_owned() +&_name.to_string();
}



 