import React from "react";
import MyButton from "./UI/Button/myButton";
import { useNavigate } from "react-router-dom";
const PostItem = (props) =>{
    const router = useNavigate();
    return(
        <div className="post">
            <div className="text">
                <h1 className="title">{props.post.id}. {props.post.title}</h1>
                <div className="body">{props.post.body}</div>
            </div>
            <MyButton onClick = {() => router(`/posts/${props.post.id}`)} >Открыть</MyButton>
            <MyButton onClick = {props.deletePost} >delete</MyButton>
        </div>
    );

}
export default PostItem;