import {useEffect,useState} from 'react'
import services from '../../../services';
import product_image from '../../../../assets/product.jpg'
import StudioForm from '../../../studio/form';
import cart from './cart'

const index  = ({param}) => {

    const [buy, isBuy] = useState(false)
    const [product, setProduct] = useState();


    //inittialize product to show
    useEffect(() => {
        try{

            let _product = {}

            console.log(param, services.native.getUriParams({query:'name'}))

            if(param === 'demo'){
                const org = services.native.getUriParams({query:'name'});
                _product = {
                    name: 'Demo Product',
                    price: 200,
                    org
                }
            }else{
                _product = {
                    name:'Orange Haze',
                    price: 450,
                    // desc: 'The sativa-dominant hybrid Orange Haze by Green Devil Genetics combines a flavorful Orange Bud with the classic Haze',
                    org: 'Gmabata',

                }
            }
            // setProduct(_product)

        }catch(err){
            services.system.ErrorHandling({msg:'unable to load',err})
        }


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
                        {/*product  image*/}
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
                                    <h1 className={'text-3xl lg:text-4xl font-bold py-1'}>{product.name}</h1>
                                    <h2 className={'text-xl lg:text-2xl font-bold py-1'}>From ZAR {product.price}</h2>


                                    <p className={'text-lg py-1'}>
                                        {
                                            product.desc ? product.desc :
                                                `trust in ${product.org} they believe in the value they're providing so much that it did not come with a description
                                                but a faith that you are here because you know what you want`
                                        }
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