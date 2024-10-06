import React from "react";
import PostItem from "./PostItem";

const PostList = (props) =>{
    return(
        <div className="">
            {props.posts.length == 0 
            ?         <h1 style={{textAlign: "center"}}>Posts is not founded!</h1>
             : 
             props.posts.map((post, index) =>
                <PostItem post = {post} index = {index + 1} key = {post.id} deletePost = {() => props.deletePost(post.id)}/>
                )
            }
        </div>
    );
}

export default PostList;