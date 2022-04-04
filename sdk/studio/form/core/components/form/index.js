import {Upload} from '../../../../components'
import { useEffect,useState } from "react";
import uploadFileToBlob from './azureUpload.ts';
const Upload = ({handleEvent,values,custom,config}) => {

    const [isUploading, setUploading] = useState(false);
    useEffect(() => {
        custom(true)
    })

    const setValue =  async (files) => {
        const reader = new FileReader();


        try{

            let file = files[0];
            //     console.log('file rawk',file)
            let ext = file.name.split(".")[1];
            let fileName =`${config.name}-${file.lastModified}-${new Date().toISOString()}.${ext}`
            let result = await uploadFileToBlob(file, fileName);
            setUploading(true)
             console.log("file upload ", result)
            handleEvent({
                [config.name]:fileName
            })

        }catch (err){
            handleEvent({
                [config.name]:'url to blob'
            })
            console.log('file has been deployed into a black hole')

        }

        // reader.onload = async function(frEvent) {
        //
        //     let file = frEvent.target.result;
        //
        //     let ext = frEvent.name.split(".")[1];
        //     console.log('file',file)
        //
        //     let result = await uploadFileToBlob(file, `${config.name}-${new Date.now()}.${ext}`);
        //     console.log("file upload ", result)
        //

        // }
        //      let file = files[0];
        // //     console.log('file rawk',file)
        //      let ext = file.name.split(".")[1];
        //      let result = await uploadFileToBlob(file, `${config.name}-${file.lastModified}.${ext}`);
        //      console.log("file upload ", result)

        //will update to support multiple files in the near future
        // reader.readAsDataURL(files[0]);


    }
    //
    // const fileUpload = async (e) => {
    //     let file = e.target.files[0];
    //     let ext = file.name.split(".")[1];
    //     let result = await uploadFileToBlob(file, `${config.name}-${new Date.now()}.${ext}`);
    //     console.log("file upload ", result)
    //
    // }
    return(
        <>
            <div className={'mb-2 font-bold text-xl text-blue-500'}>
                {config.title}
            </div>
            <div className={'flex flex-col p-2 h-1/2 w-full relative justify-center items-center'}>

                <Upload/>
                { isUploading ? 'uploading' :`Press here to upload ${values.placeholder}`}
                <input key={config.name} className={'w-full h-full input-style bg-transparent appearance-none outline-none opacity-0 absolute'} type={'file'}  onChange={(e) => setValue(e.target.files)} accept={values.support}/>

            </div>
        </>

    )
}

export default Upload;