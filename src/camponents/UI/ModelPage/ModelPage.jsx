import React from "react";
import classes from "./ModelPage.module.css";
const ModelPage = ({children, visible, closeModelPage}) =>{
    const classArr = [classes.myModel];
    if(visible){
        classArr.push(classes.active);
    }
    return(
        <div className={classArr.join(' ') } onClick = {closeModelPage}>
            <div className={classes.modelPage_flex} onClick = {e => e.stopPropagation()}>
            <div className = {classes.modelContent}>
                {children}
            </div>
            <div className={classes.closeButton} onClick = {closeModelPage}>
            </div>
            </div>
        </div>
    );
}
export default ModelPage;