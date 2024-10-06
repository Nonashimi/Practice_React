import React from "react";
import MySelect from "./UI/Select/mySelect";
import MyInput from "./UI/Input/myInput";


const PostFilter = ({sortPost, selectedSort, searchQuery, searchPost}) =>{
    const options = [
        {value: "title", text: "по названию"},
        {value: "body", text: "по содержимому"}
      ];
    
    return(
        <div className="">
            <MySelect defaultValue = {"сортировка по"} options = {options} onChange = {sortPost} value = {selectedSort}/>
            <MyInput placeholder = "Search..." value = {searchQuery} onChange = {e => searchPost(e.target.value)}/>
        </div>
       )
}

export default PostFilter;