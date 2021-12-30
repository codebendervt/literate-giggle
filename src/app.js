import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// import your route components too
import App from './sections/index';
import Home from './sections/home'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path={"home"} element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);