# How To Use 

formConfig = const data = [{type: 'input', values:{placeholder:'test',name:'test', type:'text'}},{type: 'input', values:{placeholder:'test',name:'fire', type:'text'}}]

Component =  <StudioForm title={'form title'} formConfig={data} submitHandler={(e) => console.log('data',e)}/>

fileSpecific support =support:'file_extension|audio/*|video/*|image/*|media_type">'
#TODO

- DataManagement of the form
- product support
- services support
- Include Invoice in form capabilites