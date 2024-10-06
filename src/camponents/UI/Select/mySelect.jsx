import React from "react";
import classes from "./mySelect.module.css";
const MySelect = ({defaultValue, options, onChange, value}) =>{
    return(
        <select name="" id="" className= {classes.mySel}  value = {value} onChange={e => onChange(e.target.value)} >
            <option value="" disabled = {true} className= {classes.option} >{defaultValue}</option>
            {options.map(option => 
                <option key = {option.value} value={option.value}>{option.text}</option>
            )}
        </select>
    );
}

export default MySelect;