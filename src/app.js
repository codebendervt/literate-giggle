import { render } from "react-dom";
// import {useEffect,useState} from "react";
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