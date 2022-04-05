
const Loader = () => {

    return(
        <div className={`w-8 h-8 cursor-pointer `}>
            <svg width="48" height="48" strokeWidth="0.5" stroke="#808080" fill="none" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" className={'animate-spin'}>
                <g fill="none" fillRule="evenodd">
                <rect width="24" height="24" className={'stroke-white stroke-0 '}/>
                <path d="M12,2 L12,6 M12,18 L12,22 M4.93,4.93 L7.76,7.76 M16.24,16.24 L19.07,19.07 M2,12 L6,12 M18,12 L22,12 M4.93,19.07 L7.76,16.24 M16.24,7.76 L19.07,4.93" stroke="#808080"/>
                </g>
            </svg>
        </div>
    )
}

export default Loader