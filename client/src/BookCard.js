// import Popup from 'reactjs-popup';
import { useState } from 'react'
import PopUpPosts from './PopUpPosts';
import 'bulma/css/bulma.css'



function BookCard({ book, deleteBook }) {

    const [isClicked, setIsClicked] = useState(false)

    // Creating the read more function on my cards
    function LongText(content,limit){


        const [showAll, setShowAll] = useState(false);

        function showMoreOrLess(){
            setShowAll(!showAll)
        }

        if (content.length <= limit) {
            return {content} }
            
        if (showAll){
            return <div>
            {content} 
            <button onClick={showMoreOrLess}>Read less</button>
            </div>
        } 

        const toShow = content.substring(0, limit) + "...";
        return <div> 
          {toShow} 
          <button onClick={showMoreOrLess}>Read more</button>
        </div>



    
    }

     // End of LongText function
      

   

    function handlePopUp() {

        setIsClicked(!isClicked)
    }

    function handleClick() {
        deleteBook(book.id)
    }




    return (
        // <div className='container'>
        //     <section className='section'>
                // <div className='columns'>
                    <div className='column is-4'>
                        <div className='card'>
                            <div className='card-header'>
                                <p class="card-header-title">
                                    {book.title} - {book.author}
                                </p>
                                </div>
                                <div className='card-content'>
                                <div className="content"> 
                                {LongText(book.description, 100)}
                                </div>
                                </div>
                                <footer class="card-footer">
                                <button className='card-footer-item' onClick={handlePopUp}> See all posts </button>
                                {isClicked ? <PopUpPosts isClicked={isClicked} handlePopUp={handlePopUp} book={book} /> : null}
                                <button className='card-footer-item' onClick={handleClick} >  🗑 </button>
                                </footer>
                        </div>
                    </div>
                // </div>
        //     </section>
        // </div>




    )
}

export default BookCard;


