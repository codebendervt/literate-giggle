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
import Pay from './sections/pay';
import Dot from './dot/';
import Order from './order/';
import Buy from './buy';
import Bala from './bala';
import About from './about';
import Dashboard from './sections/dashboard';
import {trackPage} from "../sdk/api/analytics";
import { nanoid } from 'nanoid'
import 'animate.css';


const Layout = () => {
    useEffect(() => {
        if(!localStorage.getItem('id')){
            localStorage.setItem('id',nanoid())
        }

        if(!document.location.hostname.includes('localhost')){
            console.log('your visit is welcome')
            trackPage(document.location)
        }


    },[])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path={":brand"} element={<Dot/>}></Route>
                <Route path={"bala"} element={<Bala/>}></Route>
                <Route path={"lead"} element={<Lead/>}></Route>
                <Route path={"home"} element={<Home/>}></Route>
                <Route path={"pay"} element={<Pay/>}></Route>
                <Route path={"buy"} element={<Buy/>}></Route>
                <Route path={"order"} element={<Order/>}></Route>
                <Route path={"content"} element={<About/>}></Route>
                <Route path={'dashboard'} element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
        )

}

render(
    <Layout/>, document.getElementById("root")
);