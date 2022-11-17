import './PostCard.css'
import Popup from 'reactjs-popup';
import {useState} from 'react'
import PopUpPosts from './PopUpPosts';
import './MainCss.css'


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
                <h3> {book.author} </h3>
                <span> {book.description} </span>
                <br></br>
                <br></br>
                <button className='button-33' onClick={handlePopUp}> See all posts </button>
                {isClicked? <PopUpPosts isClicked={isClicked} handlePopUp={handlePopUp} book={book}/> : null }
                <button className='button-33' onClick={handleClick} >  🗑 </button>
            </div>
        </div>

    )
}

export default BookCard;