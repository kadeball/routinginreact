import {Link} from "react-router-dom";
import React from "react";


function Nav(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Pink/pink">Pink</Link>
            <Link to="/data/:id">Data</Link>
            <Link to="/cool">Cool Tingz</Link>

        </nav>
    )
}

export default Nav;