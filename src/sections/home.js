

const Home  = () => {


    return(
        <div className={'w-screen h-screen flex justify-center items-center bg-black text-white'}>
            <p className={'w-64 text-center'}> {JSON.parse(localStorage.getItem('lead')).name || ''} A new world is awaiting you. come back one month from now</p>
        </div>
    )
}

export default Home;