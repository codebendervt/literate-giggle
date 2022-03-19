import icons from '../style/assets/icons'
import loader from 'assets/icons/loader.svg';

import Core from './core'
import Components from '../components'

import {useState, useEffect, useReducer} from "react";


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

const Engine = ({submitHandler, formConfig, title}) => {

    const [isCustom, setCustom] = useState(true);
    // const [type] = useState(NativeService.getUriParams({param:'type'}))
    const [pos, setPos] = useState(0)
    const [len] = useState(formConfig.length)
    const [state, dispatch] = useReducer(handleEvent, []);
    const [done,setDone] = useState(false)
    let {[formConfig[pos].type]: Comp} = Core


    useEffect(() => {

        try{

            //to auto change
            if(state.length > pos && state.length < len && isCustom){
                setPos(pos + 1)

            }
            else if( pos == len - 1 && isCustom){
                handleSubmit()
            }

        }catch(e){
            console.error('unable to change form',e)
        }


    },[state])

    const handleSubmit = async () => {

        setDone(true)
        let _data = null

        if(state.length > 0){
            _data = {}
            state.map((x) => {
                Object.entries(x).map(([key,value]) => {

                    _data[key] = value
                })
            })
        }

        if(_data !== null)
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
        <div className={`w-auto h-full flex flex-col p-8 bg-black text-white ${isCustom ? 'py-8' : 'py-64' }`}>


            <div className={'w-full font-bold text-2xl my-4 text-white'}>{title}</div>
            <Comp key={`Comp${formConfig[pos].name}`} values={formConfig[pos].values} handleEvent={dispatch} config={formConfig[pos]} custom={setCustom}/>
            <div className={`w-full text-white flex ${isCustom ? '':'flex-grow '}items-end justify-center`}>
                {
                     isCustom ? <></> : pos == len - 1 ?
                        <div onClick={handleSubmit}>
                            <img className={`w-8 h-8 cursor-pointer ${done ? 'animate-spin': ''}`} src={done ? loader : icons.submit_icon.src || icons.submit_icon}/>


                        </div> : <div onClick={nextSubmit}>
                            {/*there is going to need to be a new configuration for nextjs*/}
                            <img className={'w-8 h-8 cursor-pointer'} src={icons.next_icon.src || icons.next_icon}/>
                        </div>
                }

            </div>

        </div>
    )
}


export default Engine