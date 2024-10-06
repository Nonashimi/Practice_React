import React, { useEffect, useState } from 'react'
import { parsePath, useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { UseFetching } from '../hooks/useFetching';
const PostById = () => {
    const params = useParams();
    const [post, setPost] = useState({});
        const[fetchPostById, isLoading, error] = UseFetching(async() =>{
            const response = await PostService.getById(params.id);
            setPost(response.data);
            
        })
    useEffect(() =>{
         fetchPostById();
         
    }, [params]);
  return (
    <div>
        {isLoading?
        <div>Loading</div>:
        <div className="">
            <h1>This is a {post.id} post</h1>
            <div className="">{post.title}</div>
            <div className="">{post.body}</div>
        </div>
        }
        
    </div>
  )
}

export default PostById;