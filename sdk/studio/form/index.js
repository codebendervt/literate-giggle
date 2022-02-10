import icons from '../style/assets/icons'
import Core from './core'
// import BackendService from '../src/services/backend'
// import NativeService from '../src/services/native'
import Components from '../components'

import {useState, useEffect, useReducer} from "react";


const formConfig = [
    {type: 'options', title:'How Many Grams', values:[{value:'1G'},{value:'2G'},{value:'3G'},{value:'4G'},{value:'5G'}]},
    {type: 'input', title:'Enter Your Number', values: {name:'cell', placeholder: 'Your Number'}},
    {type: 'input', title:'Your Name', values: {name:'name', placeholder: 'Your name'}}
]

const handleEvent = (state, action) => {

    try{
        let isPos = 0;
        let isAdd = true;
        state.map((i,k) => {
            if(Object.keys(action)[0] == Object.keys(i)[0])
            {
                isAdd = false
                isPos = k
            }
        })
        if(isAdd){
            state.push(action)
        }else{
            state[isPos] = action
        }

        return [...state]
    }catch (e) {
        console.error('unable to add form',e.message)
    }

}

const Engine = ({submitHandler}) => {

    const [isCustom, setCustom] = useState(true);
    // const [type] = useState(NativeService.getUriParams({param:'type'}))
    const [pos, setPos] = useState(0)
    const [len] = useState(formConfig.length)
    const [state, dispatch] = useReducer(handleEvent, []);
    let {[formConfig[pos].type]: Comp} = Core

    // useEffect(() => {
    //     // const {[formConfig[0].type]: core} = Core
    //     // try{
    //     //     setAppState(localStorage.getItem(('domain')))
    //     //     isLoading(false)
    //     // }catch (e) {
    //     //     console.error('unable to load',e.message)
    //     // }
    //
    //
    // }, [])

    useEffect(() => {

        if(state.length > pos && state.length < len && isCustom)
            setPos(pos + 1)

    },[state])

    const handleSubmit = async () => {

        let _data = {}
        state.map((x) => {
            Object.entries(x).map(([key,value]) => {
                _data[key] = value
            })
        })

        submitHandler(_data)

        // let _id = NativeService.getLocalStorage('id')
        // let store = await BackendService.Type[type].get(_id)
        // store.data.socials.push(_data)
        //
        // let isSaved = await BackendService.Type[type].save(_id,store)
        //
        // if(isSaved)
        //     // TODO show that it is loading
        // window.location = '/'

    }
    const nextSubmit = () => {
        setPos(pos + 1)
    }

    return (
        <div className={'w-full h-screen flex flex-col p-8 py-56'}>


            <Comp values={formConfig[pos].values} handleEvent={dispatch} config={formConfig[pos]} custom={setCustom}/>
            <div className={'w-full text-white flex flex-grow items-end justify-center'}>
                {
                    pos == len - 1 ?
                        <div onClick={handleSubmit}>
                            <img className={'w-8 h-8 cursor-pointer'} src={icons.submit_icon}/>


                        </div> : isCustom ? <></> : <div onClick={nextSubmit}>
                            <img className={'w-8 h-8 cursor-pointer'} src={icons.next_icon}/>
                        </div>
                }

            </div>

        </div>
    )
}


export default Engine