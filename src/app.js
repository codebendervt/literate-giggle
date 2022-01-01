import { render } from "react-dom";
import {useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import your route components too
import App from './sections/index';
import Home from './sections/home'
import {initAnalytics} from "../sdk/api/analytics";
import { nanoid } from 'nanoid'


const Layout = () => {
    useEffect(() => {
        if(!localStorage.getItem('id')){
            localStorage.setItem('id',nanoid())
        }

        console.log('initializing...')
        const trackPage = async () => {
           await initAnalytics(localStorage.getItem('id'),window.location.origin,'index',document.referrer)
        }

        trackPage()

    },[])

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path={"home"} element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
        )

}

render(
    <Layout/>, document.getElementById("root")
);