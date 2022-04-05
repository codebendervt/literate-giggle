
const ErrorHandling = ({msg, err}) => {
    console.error(msg,err)
}

const LogHandling = ({msg,type}) => {
    console.log(msg,type)
}

export default {ErrorHandling,LogHandling}