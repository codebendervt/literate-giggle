

const update_slot = (name,value) => {
    let slot = document.querySelectorAll(`[slot = ${name}]`)[0];
    if(slot){
        slot.innerHTML = value
    }
}


export const hello_input = (e, state) => {

 
    // console.log('hello', e.target.id)
    // console.log('hello', e.target.value)
    // console.log('hello', e.target.dataset.for)
    // state.append('username', 'Chris')

    update_slot(e.dataset.for,e.value)
 

}


export const on_mount = () => {
    console.log('mounted')
}





 