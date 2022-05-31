import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'
import Posts from './Components/post'
import Pagination from './Components/pagination'

function App() {
  const [posts,setPosts ] = useState([]);
  const [loading,setLoading ] = useState(false);
  const [cuerrentPage,setCuerrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(10);
  
  useEffect(()=>{
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data);
      setLoading(false)
    }
    fetchPosts();
  }, []);
  
  //Get Current post
  const indexOfLastPost = cuerrentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const CurrentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

  //Change Page
  const paginate = (pageNumbers) => setCuerrentPage(pageNumbers)
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={CurrentPosts} loading={loading}/>
      <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
