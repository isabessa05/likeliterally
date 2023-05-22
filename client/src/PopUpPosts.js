import React from 'react';
import PostCard from './PostCard';
import './PopUp.css'
import {useEffect, useState} from 'react'
import './MainCss.css'

function PopUpPosts({isClicked, handlePopUp, book }) {

    const [posts, setPosts] = useState([])
    
    //This useEffect allows me to update the posts inside the books every time I add a new post
    useEffect(() => {
        fetch(`/bookposts/${book.title}`).then((response) => 
            response.json()).then((data) => setPosts(data));
          }
      , []);

    if (!isClicked) return null;

    const displayPosts = posts.map((post) => {
        return <PostCard  post={post}  />
    })

    return (
        <div className='overlay'>
            <div className='modalContainer'>
            {displayPosts}
            <button className='closeBtn' onClick={handlePopUp}> X </button>
            </div>
        </div>
    )
}


export default PopUpPosts;