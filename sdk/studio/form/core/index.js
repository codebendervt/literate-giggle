import { useEffect } from "react";
import './index.css'
// Todo turn into a react hook to handle the changes
let placeholder = "";

const options = ({values,handleEvent,custom,config}) => {

    useEffect(() => {
        custom(true)
    })
    const setValue = (val) => {
        placeholder = val.placeholder;
        handleEvent({
            type:val.value
        })
    }

    return(
        <div className={'flex flex-col'}>
            <h1 className={'text-white font-book text-3xl lg:text-5xl'}>{config.title}</h1>
            <div className={'flex flex-wrap'}>
                {
                    values.map((i,k) => {
                        return(

                            <div key={k} className={'w-16 h-16 flex items-center justify-center bg-white rounded text-black cursor-pointer z-10 m-3'} onClick={ (e) => setValue(i)}>
                                {i.icon ?  <img id={i.value}  name={i.value} className={'w-8 h-8'} src={i.icon}/> : <p>{i.value}</p>}

                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

const input = ({handleEvent,values,custom,config }) => {

    useEffect(() => {
        custom(false)
    })

    const setValue = (val) => {

        handleEvent({
            [values.name]:val
        })
    }

    return(
        <div className={'flex flex-col w-full'}>
            <h1 className={'text-white font-book text-3xl lg:text-5xl'}>{config.title}</h1>
            <div className={'w-full h-10 flex items-center p-2 border-l-2'} key={values.placeholder}>

                <input className={'w-full h-12 input-style text-white'} type={'text'} placeholder={values.placeholder || placeholder} onChange={(e) => setValue(e.target.value)}/>
            </div>
        </div>

    )
}

export default {options,input}