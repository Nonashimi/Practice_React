import React from "react";
import classes from "./myInput.module.css";
const MyInput = (props) =>{
    return(
        <input type="text" className = {classes.myInt} {...props} />
    );
}

export default MyInput;