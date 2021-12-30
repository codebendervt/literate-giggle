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

const Layout = () => {
    useEffect(() => {
        console.log('initializing...')
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