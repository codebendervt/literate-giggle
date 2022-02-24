
export default function ColContainer({children}) {
    return (


            <main className={'w-screen h-screen flex flex-col justify-center items-center'}>

                <div className={'w-full h-auto flex'}>
                    {children[0]}
                </div>

                <div className={'w-full h-auto flex flex-grow items-center justify-center '}>
                    {children[1]}
                </div>

                {/*navigation bar*/}
                <div className={'w-full h-auto p-2  flex justify-center'}>

                    {children[2]}

                </div>
            </main>

    )
}
