import {useEffect,useState} from 'react'
import product_image from '../../../../assets/product.jpg'
import StudioForm from '../../../studio/form';
import cart from './cart'

const index  = ({param}) => {

    const [buy, isBuy] = useState(false)
    const [product, setProduct] = useState();


    useEffect(() => {
        setProduct({
            name:'hello world',
            org: 'Gmabata'
        })
        console.log(param)
    },[])

    const handleSubmit = (e) => {

        window.location = `/order?name=${e.name}`
    }

    const GetOrg = ({product}) => {

        const _org = product.org.split(' ');

        return(
            <>
                {_org[0]}
                <br/>
                {
                    _org.length > 0 ?
                        <div>
                            {
                                _org.map((i,k) => {
                                    if(k !== 0){
                                        return i + ' '
                                    }
                                })
                            }
                        </div>
                        : ''
                }
            </>

        )
    }

    return(

        <>
            {product ?

                <div className={'w-screen h-screen flex flex-col lg:flex-row  text-white select-none p-4 lg:p-0 bg-transparent  md:justify-center '}>

                    <div className={'w-full h-2/3 md:h-1/2 lg:h-full lg:w-1/2 flex justify-center'}>
                        <div className={'w-full h-full flex md:max-w-lg lg:max-w-full'}>
                            <div className={'w-full h-full  bg-black rounded lg:rounded-none bg-cover '}>
                                { product.image ?
                                    <img className={'object-cover w-full h-full rounded'} src={product.image}/> :

                                    <div className={'w-full h-full flex justify-center items-center'}>

                                        <div className={'text-3xl lg:text-5xl font-bold w-64 text-center'}>
                                            <GetOrg product={product}/>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                        {/*product image*/}
                    </div>

                    <div className={'w-full h-1/3 md:h-auto lg:w-1/2 lg:h-full flex flex-col  items-center text-gray-700  z-20'}>
                        <div className={'w-full h-full  max-w-md  md:max-w-lg'}>
                            <div className={'h-full w-full flex flex-col md:justify-center'}>

                                {/*<div className={'rounded w-full h-96 bg-gray-200'}></div>*/}
                                <div className={'flex-grow md:flex-none h-auto w-full flex-col py-2'}>
                                    <h1 className={'text-3xl lg:text-4xl font-bold'}>Orange Haze</h1>
                                    <h2 className={'text-xl lg:text-2xl font-bold'}>From ZAR 450</h2>

                                    <p className={'text-lg'}>
                                        The sativa-dominant hybrid Orange Haze by Green Devil Genetics combines a flavorful Orange Bud with the classic Haze.
                                    </p>
                                </div>

                                <div className={'w-full h-auto flex'}>
                                    {/*onClick={() => isBuy(true)}*/}

                                    <div className={'w-full p-2 bg-black rounded h-12 text-white text-center text-lg'} >
                                        Buy Now
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>


                :

                <div className={'w-screen h-screen bg-black'}>
                    {/*no product to show page*/}
                    {/*<StudioForm submitHandler={handleSubmit} />*/}
                </div>


            }

        </>

    )
}

export default {cart, index}