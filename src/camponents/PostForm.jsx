import React, { useState } from 'react';
import MyInput from "./UI/Input/myInput";
import MyButton from "./UI/Button/myButton";
const PostForm = ({createPost, closeModelPage}) =>{
    const [post, SetPost] = useState({title: "", body: ""});
    const addPost = () =>{
        let f = {};
        f.id = Date.now();
        f.title = post.title;
        f.body = post.body;
        createPost(f);
        closeModelPage();
        SetPost({...post, title: "", body: ""});
      }
    return(
        <div>
            <MyInput placeholder = "название поста" value = {post.title} onChange = {event => SetPost({...post, title: event.target.value})}></MyInput>
            <MyInput placeholder = "содержимое поста" value = {post.body} onChange = {event => SetPost({...post, body: event.target.value})}></MyInput>
            <MyButton onClick = {addPost}>add</MyButton>
        </div>
    );
};

export default PostForm;