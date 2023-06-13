import React from 'react';
import PostCard from './PostCard';

import {useEffect, useState} from 'react'


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
        <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
        <section className='section'>
            <div className='columns is-multiline '>
            {displayPosts}
            </div>
            </section>
            <button class="modal-close is-large" aria-label="close" onClick={handlePopUp}> X </button>
            </div>
        </div>
    )
}


export default PopUpPosts;