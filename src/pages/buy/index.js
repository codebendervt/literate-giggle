import {useEffect,useState} from 'react'
import cart from './cart'


const index = ({param}) => {
    const [test, setTest] = useState()
    useEffect(() => {
        console.log(param)
    },[])
    return(<>
    <div>buy noe</div><div>now</div>
    </>)
}

export default {cart, index}