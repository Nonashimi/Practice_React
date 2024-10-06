import React from "react";
import classes from "./Pagination.module.css";
const MyPagination = ({pageArray, page, clickLenta}) =>{
    return(
        <div className="">
            { pageArray.map((i) =>(
            <span key = {i} className = {i != page ? classes.pages: classes.pages_active} onClick = {() => clickLenta(i)}>{i}</span>))
            }
        </div>
    );
}

export default MyPagination;