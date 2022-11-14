import React from 'react';
import PostCard from './PostCard';
import './PopUp.css'
import {useEffect, useState} from 'react'

function PopUpPosts({isClicked, handlePopUp, book }) {

    const [posts, setPosts] = useState([])
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
            <button onClick={handlePopUp}> X </button>
            </div>
        </div>
    )
}


export default PopUpPosts;