import React from "react";
import  { useState } from "react";


function Pink({match}){
    const [color] = useState(match.params.color);

    const colorStyle={
        height:"100vh",
        backgroundColor: match.params.color,
        width: "100vw"
    };
    return(
        <div style={colorStyle}>
        </div>
    )
}



export default Pink;
