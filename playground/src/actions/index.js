export * as about from './about'
 

export const hello = (e, state) => {
    console.log('hello',state.get('username'))
}

 
const loop_template = (data_to_loop,template_to_loop,container) => {

    data_to_loop.map((data) => {
        const elem = document.createElement(template_to_loop);
        const slot = Object.keys(data)[0]
        console.log(Object.keys(data)[0])
        const span = document.createElement('span')
        span.setAttribute('slot',slot)
        span.innerHTML = data[slot]

        elem.appendChild(span)
        container.appendChild(elem)
    })
}

export const on_mount = () => {


    const gallery_container = document.getElementById('gallery')
    // they would have to clean the data,
    // in the near future the has be a cleaner way
    const test_data = [{['my-text']:'hello world'}, {['my-text']:'bye bye world'}, {['my-text']:'we rock'}]

    loop_template(test_data,'my-paragraph',gallery_container)



    console.log('mounted')
}