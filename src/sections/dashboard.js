

const Dashboard  = () => {


    return(
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white'}>
            <div className={'w-80 h-screen flex flex-col bg-gray-200 rounded-r-lg shadow absolute lg:relative p-2'}>
                <div className={'w-full h-auto flex-grow'}></div>
                <div className={'w-full flex items-end p-2 justify-center'}>
                    <p className={'text-black text-sm'}>A new edition to the creator economy</p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;