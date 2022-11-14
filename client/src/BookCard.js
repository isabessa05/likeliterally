import './PostCard.css'
import Popup from 'reactjs-popup';
function BookCard({book}) {




    return (

    <div className='column'>
            <div className="card">
                <h2> {book.title} </h2>
                <p> {book.author} </p>
                <span> {book.description} </span>
                <br></br>
                <br></br>
            
            </div>
        </div>
    )
}

export default BookCard;