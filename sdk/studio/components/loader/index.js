

const Loader = ({msg = 'hello world'}) => {

    return(
        <div className={'w-screen h-screen flex justify-center items-center bg-black text-white'}>
            <p className={' animate-pulse'}>
                {msg}
            </p>

        </div>
    )
}

export default Loader