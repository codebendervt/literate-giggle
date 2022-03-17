import { render } from "react-dom";
// import {useEffect,useState} from "react";
// // import your route components too
// import {trackPage} from "../sdk/api/analytics";
// import { nanoid } from 'nanoid'
import 'animate.css';
import App from "../sdk/toolbox";
import pages from './'


const Layout = () => {

    return(

        <App pages={pages}></App>

        )

}

render(
    <Layout/>, document.getElementById("root")
);