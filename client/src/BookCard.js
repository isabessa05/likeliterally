import './PostCard.css'
import Popup from 'reactjs-popup';
import {useState} from 'react'
import PopUpPosts from './PopUpPosts';

function BookCard({book, deleteBook}) {

    const [isClicked, setIsClicked] = useState(false)

    function handlePopUp() {
        
        setIsClicked(!isClicked)
    }

    function handleClick(){
        deleteBook(book.id)
    }


    return (

    <div className='column'>
            <div className="card">
                <h2> {book.title} </h2>
                <p> {book.author} </p>
                <span> {book.description} </span>
                <br></br>
                <br></br>
                <button onClick={handlePopUp}> See all posts </button>
                {isClicked? <PopUpPosts isClicked={isClicked} handlePopUp={handlePopUp} book={book}/> : null }
                <button onClick={handleClick} >  🗑 </button>
            </div>
        </div>
    )
}

export default BookCard;