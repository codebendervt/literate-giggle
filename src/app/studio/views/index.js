import { useEffect,useState } from "react";
// import Upload from './components/form'
//does not work with nextjs and now parcel mxm
// import './index.css'
// Todo turn into a react hook to handle the changes
let placeholder = "";
let type = "";


//create a global handler for components
function Options ({values,handleEvent,custom,config}) {

    useEffect(() => {
        custom(true)
    })

    const setValue = (val) => {
        placeholder = val.placeholder;
        type = val.type;
        handleEvent({
            [config.name]:val.value
        })
    }

    return(
        <div className={'flex w-full h-auto flex-col'}>
            <div className={'mb-2 font-bold text-xl text-blue-500'}>
                {config.title}
            </div>
            {
                values.map((i,k) => {
                    return(

                        <div key={k} className={`${i.icon ? 'w-16 h-16': 'w-auto p-2'} flex items-center justify-center bg-white rounded text-black cursor-pointer z-10 m-2`} onClick={ (e) => setValue(i)}>
                            {i.icon ?  <img id={i.value}  name={i.value} className={'w-8 h-8'} src={i.icon}/> : <p>{i.value}</p>}

                        </div>
                    )
                })
            }
        </div>

    )
}

function Input ({handleEvent,values,custom,support, config,setError, error, defaultValue = true}) {

    useEffect(() => {

        custom(false)
        if(defaultValue){
            handleEvent({
                [config.name]: ''
            })
        }

    },[])

    //turn into global function
    const setValue = async (val) => {

        try{

            if(config.valid) {
                if(await config.valid(val)){
                    setError(false)
                    handleEvent({
                        [config.name]:val
                    })
                }else{
                    setError(true)
                }
            }else{
                handleEvent({
                    [config.name]:val
                })
            }



        }catch(e){
            console.error(e)
        }

    }

    return(
        <div className={'flex w-full h-auto flex-col'}>
            <div className={'mb-2 font-bold text-xl text-blue-500'}>
                {config.title}
            </div>
            <div className={`w-full h-10 flex items-center p-2 border-l-2 ${error ? 'border-red-400' : ''} appearance-none`} key={values.placeholder}>

                <input key={config.name} className={'w-full h-12 input-style bg-transparent appearance-none outline-none'}
                       type={values.type || type}
                       placeholder={values.placeholder || placeholder}
                       onChange={(e) => setValue(e.target.value)}
                       accept={support}
                       autoFocus={"autofocus"}/>
            </div>
            {/*<p className={'text-xs w-full text-right'}>a quick error message</p>*/}
        </div>

    )
}

function Search ({handleEvent,values,custom,config}) {

    const [searchResults, setResults] = useState([])

    useEffect(() => {
        custom(true)
    })

    const startSearch = (e) => {

      try{
          const searchResult = values.data.filter((i) => i.toLowerCase().includes(e[config.name].toLowerCase()))
          setResults(searchResult)
      }
      catch (err){
          console.log('I am searching for some reason')
      }
    }

    const selectResult = (e) => {

        let indexValue;
        values.data.map((i,k) => {
            if(i == e){
                indexValue = k;
            }
        })
        handleEvent({
            [config.name]: indexValue
        })
    }
    return(
        <>

            <Input values={values} handleEvent={startSearch} custom={custom} config={config} defaultValue={false}></Input>
            <div className={'w-full flex flex-col overflow-hidden '}>

                {searchResults.map((i,k) => {
                    return(
                        <div key={i} className={'text-white p-2 border my-2'} onClick={() => selectResult(i)}>{i}</div>
                    )
                })}

            </div>
        </>

    )
}

function Info ({handleEvent,values,custom, config}) {

    useEffect(() => {

        custom(true)

    },[])

    //turn into global function
    const setValue = () => {

        try{

            handleEvent({
                [config.name]:true
            })

        }catch(e){
            console.error(e)
        }

    }

    return(
        <div className={'flex flex-grow w-full h-auto flex-col justify-center items-center'}>

            <div className={'flex flex-col'}>

                <div className={'my-2 font-bold text-2xl text-blue-500 '}>
                    {config.title}
                </div>

                <div className={'w-full h-full flex flex-col max-w-sm'}>

                    {
                        values.map((val) => {

                            return(
                                <div key={val.name} className={'w-full flex flex-col max-w-xs my-2'}>
                                    <h1 className={'font-bold text-xl'}>{val.name}</h1>
                                    <p className={'text-lg font-italics'}>{val.desc}</p>
                                </div>
                            )
                        })
                    }

                </div>

                <div onClick={setValue} className={'p-2 bg-blue-500 rounded flex w-32 my-4'}>
                    <div className={'flex w-2/3'}>
                        Agree
                    </div>
                    <div className={'flex w-1/3 justify-end'}>
                       ->
                    </div>
                </div>
            </div>


        </div>

    )
}

export default {options: Options, input: Input, search: Search, info:Info}