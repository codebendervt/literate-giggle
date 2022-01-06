import { render } from "react-dom";
import {useEffect,useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import your route components too
import App from './sections/index';
import Lead from './sections/lead';
import Home from './sections/home';
import {trackPage} from "../sdk/api/analytics";
import { nanoid } from 'nanoid'


const Layout = () => {
    useEffect(() => {
        if(!localStorage.getItem('id')){
            localStorage.setItem('id',nanoid())
        }


        if(localStorage.getItem('lead') && window.location.pathname != '/home'){
            window.location = '/home'
        }



        if(!document.location.hostname.includes('localhost')){
            console.log('your visit is welcome')
            trackPage('index')
        }


    },[])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path={"lead"} element={<Lead/>}></Route>
                <Route path={"home"} element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
        )

}

render(
    <Layout/>, document.getElementById("root")
);