import React from "react";
import Pink from "../components/Pink";
import {Link} from "react-router-dom";
import '../App.css';



function home(){
    const boxStyle={
        Box1: {
            height: "200px",
            width: "200px",
            backgroundColor: "pink",
            align: "center",
        },
        Box2: {
            height: "200px",
            width: "200px",
            backgroundColor: "rebeccapurple",
            align: "center"
        },
        Box3: {
            height:"200px",
            width:"200px",
            backgroundColor:"cornflowerblue",
            align: "center"
        }
    }



    return(
        <div>
        <div className="Box1" style={boxStyle.Box1} onClick=""></div>
            <div className="Box2" style={boxStyle.Box2}></div>
            <div className="Box3" style={boxStyle.Box3}></div>
        </div>


            )
}

export default home;