// import { render } from "react-dom";
// import { useEffect,useState } from "react";
// import {App, services} from '../src'
// import { decryptMessage, encryptMessage } from "./src/security";
// import {push_notification} from './src/test'
// import pages from './src'
import views from './src/views/'
import  * as actions from './src/actions/'
import * as templates from './src/templates'

// const model = [
//     {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}},
//     {type: 'input',name:'name',title:'Your Name', values:{placeholder:'Your Name', type:'tel'}}

// ]
// const Layout = () => {

//     const [sub, setSub] = useState()

//     const routeValidation = ( ) => {
//         const uri = new URL(document.location.href);
//         let last_valid = pages;

//         const path = uri.pathname.split('/');

//         console.log(uri, path, pages)

//         path.map((p, index) => {
//             if(p in last_valid){
//                 last_valid = pages[p]
//                 console.log(index)
//                 if(index === 1){
//                     //set page name to index
//                     console.log(pages['index']({param:''}), 'index page')
//                 }else{
//                     //set page name to p
//                 }
                
//                 console.log(true,p,last_valid)
//             }else{
//                 if(index == 1 && p == '')
//                     // set page name to index
//                     console.log(false, p, last_valid)
//             }
//         })
//     }

//     useEffect(async () => {
//         routeValidation()
//         // console.log(services.dfinity.backend.get_all_data())
//     },[])

//     const handleSubmit = () => {

//         console.log(sub)
//         // askNotificationPermission()

//         if(sub){
//             fetch('/api/push', {
//                 method: 'post',
//                 headers: {
//                     'Content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     subscription: sub,
//                     delay: 1,
//                     ttl: 0,
//                 }),
//             });
//         }

//         console.log('submiting')
//     }
    
//     const SubView = ({toggle}) => {
//         return (<>
//         hello world
//         <div className="rounded-full" onClick={() => toggle()}>close</div>
//         </>)
//     }

  
//     return(
//         // <div className={'w-full h-screen bg-black '}>
//         //   <Studio.Form submitHandler={handleSubmit} formConfig={model}/>
//         // </div>
 
//         <></>
//         // <App.Core pages={pages} hasBar={true}>
//         //     <div>hello</div>
//         //     <div>
//         //         {/* <div id="one" icon='meal' value="one" subPage={SubView}>one</div>
//         //         <div id="two" icon='meal' value="app" route={'/app'}>two</div>
//         //         <div id="home" icon='home' value="home" isHome={true}/> */}
//         //     </div>
//         // </App.Core>
//         )

// }


// console.log()
var formData = new FormData(); // Currently empty



const load_html = async (html) => {
 
    await fetch(html)
    .then(response => response.text())
    .then(data => {
        html = data
    })

    return html
}

// implement initialzie templates
// const initalize_templates = async (elem) => {


//     try{

//         if(elem in templates){
//             // console.log(elem)
//             let doc = document.implementation.createHTMLDocument("New Document");
//             doc.body.innerHTML = await load_html(templates[elem]);
//             const element_name = elem.replace('_','-')
                         
//              customElements.define(element_name,
//                 class extends HTMLElement {
//                     constructor() {
//                         super();
//                         let template = doc.getElementById(element_name);
//                         let templateContent = template.content;

//                         const shadowRoot = this.attachShadow({mode: 'open'});
//                         shadowRoot.appendChild(templateContent.cloneNode(true));
//                     }
//                 }
//             );
    
//         }        
//     }catch{
//         console.log('just realised where it can be ',templates)
//     }
// }

// implement lazy load of templates

const lazy_load_templates = async () => {


    try{

 

        Object.entries(templates).map(async ([key, value]) => {
            let doc = document.implementation.createHTMLDocument("New Document");
            doc.body.innerHTML = await load_html(value);
            const element_name = key.replace('_','-')

            if(element_name)
  
            //  console.log(key,value)
       
             customElements.define(element_name,
                class extends HTMLElement {
                    constructor() {
                        super();
                        let template = doc.getElementById(element_name);
                        let templateContent = template.content;

                        const shadowRoot = this.attachShadow({mode: 'open'});
                        shadowRoot.appendChild(templateContent.cloneNode(true));
                    }
                }
            );
        })
      
        
    }catch{
        console.log('just realised where it can be ',templates)
    }
}

const render = (view,name) => {

    const run = async () => {
        
            document.body.innerHTML =  await load_html(view)
 
            const root_doc = document.getElementById('root')
            lazy_load_templates()
    
            // console.log(root_doc)
            
            // console.log(root_doc.childNodes)

            // console.log('page name',name)
            // console.log('action index',actions.index)
    
            // proccess js 
            // learn how to move this to the compiler level
            root_doc.childNodes.forEach(( element, currentIndex, listObj) => {
                let action = actions;

          
          
                if(element.id){
                    let action_route = element.id.split('/')
                    action_route.map((act) => {
                        if(act in action)
                            action = action[act]
                    })  
                }
                    
            
 
                try{
                    switch(element.nodeName) {
                        case 'BUTTON':
                            element.addEventListener('click',() => action(element,formData))
                            break;
                        case 'INPUT':
                            element.addEventListener('input',() => action(element,formData))
                            break;
                        default:
                            break;
                    }

                    // if(element.nodeName.includes('-')){
                    //     // console.log('initialize template',element.nodeName)
                    //     initalize_templates(element.nodeName.replace('-','_').toLowerCase())
                    // }

                }catch(e){
                    console.log('can not bind data',e)
                }
                 
                
            })


            // run on mount function
            try{
                let action = actions
                if(name !== 'index')
                    action = actions[name]

                if('on_mount' in action)
                    action.on_mount()


            }catch{
                console.log('unable to mount')
            }
        

    }
   
    run()
    
    
}

const routeValidation = ( ) => {
        const uri = new URL(document.location.href);
        let last_valid = views;

        const path = uri.pathname.split('/');

        console.log(uri, path, views)

        path.map((p, index) => {
            if(p in last_valid){
             
                console.log(last_valid)
                if(index === 1){
                    //set page name to index
                    render(views[p]['index'],p)
                    // console.log('set page name to index',views)
                    // console.log(views['index']({param:''}), 'index page')
                }
                else if(index >= 2){
                    console.log(last_valid,'last valid',p)
                    render(last_valid[p],p)
                } 
                last_valid = views[p]
            }else{
                if(index == 1 && p == '')
                {
                    render(views['index'],'index')
                }
                else if(index != 0)
                {
                    // have a look here
                    console.log('not found',index,p)
                    render(views['error'],'error')
                }

            }
        })
    }

routeValidation()


// (() => {

//     console.log( await views.index({name:'rawk'}))
//     document.body.innerHTML = await views.index({name:'rawk'})


//     const button_hello = document.getElementById('hello')
//     const root_doc = document.getElementById('root')

//     console.log(root_doc.childNodes)

//     console.log(document.querySelectorAll('[data-bind]'))

// })



// button_hello.addEventListener("click", views.hello);
// render(
//     <Layout/>, document.getElementById("root")
// );