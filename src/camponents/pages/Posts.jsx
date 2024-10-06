import React, {  useEffect, useState } from "react";
import MyButton from "../UI/Button/myButton";
import PostForm from "../PostForm";
import PostList from "../PostList";
import PostFilter from "../PostFilter";
import ModelPage from "../UI/ModelPage/ModelPage";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import { getPageCount } from "../../util/pages.js";
import { usePagination } from "../hooks/usePagination";
import MyPagination from "../UI/Pagination/Pagination";
import "../../styles/PostItem.css"
function Posts() { 
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  let pageArray =  usePagination(totalPages);


  const fetchPosts = async() =>{
     const response = await PostService.getAll(limit, page);
     const totalCount = response.headers["x-total-count"];
     console.log(totalCount);
     setTotalPages(await getPageCount(totalCount, limit));
     setPosts(response.data);
     setIsLoading(false);
  }
  
  useEffect(() =>{
    fetchPosts();
  }, [page]);

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }
  const deletePost = (id) =>{
    setPosts([...posts].filter(post => post.id != id));
  }

  const [filter, setFilter] = useState({sort: "", query: ""});
  
  
  const sortPost = (sort) =>{
    setFilter({...filter, sort: sort});
  }

  const clickLenta = async(item) =>{
    setPage(item);
  }

  const searchPost = (sort) =>{
    setFilter({...filter, query: sort});
  }

  const [isVisible, setVisible] = useState(false);

  const openModelPage = () =>{
    setVisible(true);
  }

  const closeModelPage = () => {
    setVisible(false);
  }
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  return (
    <div >
      <MyButton onClick = {openModelPage}>add Post</MyButton>
      <ModelPage visible = {isVisible} closeModelPage = {closeModelPage} >
          <PostForm createPost = {createPost} closeModelPage = {closeModelPage}/>
      </ModelPage>
      <PostFilter sortPost={sortPost} selectedSort={filter.sort} searchQuery={filter.query} searchPost = {searchPost}/>
      {!isLoading
      ?
        <PostList posts = {sortedAndSearchedPost} deletePost = {deletePost}/>
      :
        <h1 style={{textAlign: "center"}}>Loading...</h1>
      }
      <MyPagination clickLenta = {clickLenta} page = {page} pageArray = {pageArray}></MyPagination>
    </div>

  );
}

export default Posts;
