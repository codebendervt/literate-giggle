import { render } from "react-dom";
// import {useEffect,useState} from "react";
// // import your route components too
// import {trackPage} from "../sdk/api/analytics";
// import { nanoid } from 'nanoid'
import 'animate.css';
import App from "../sdk/toolbox";


const Layout = () => {
    // useEffect(() => {
    //     if(!localStorage.getItem('id')){
    //         localStorage.setItem('id',nanoid())
    //     }
    //
    //     if(!document.location.hostname.includes('localhost')){
    //         console.log('your visit is welcome')
    //         trackPage(document.location.pathname)
    //     }
    //
    //
    // },[])

    return(

        <App></App>

        )

}

render(
    <Layout/>, document.getElementById("root")
);