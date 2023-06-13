
import {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from './UserContext'
import 'bulma/css/bulma.css'


function SearchBookCard({ book, updatePosts }) {

    const {user, setUser} = useContext(UserContext) 
    const [bookInstance, setBookInstance] = useState("")
    const [showAll, setShowAll] = useState(false);

    const bookTitle = book.title
    const history = useHistory();

    function showMoreOrLess(){
        setShowAll(!showAll)
    }    
     // Creating the read more function on my cards
    function LongText(content,limit){
        const toShow = content.substring(0, limit) + "...";
        if (showAll){
            return (<div>
            <p>{content}</p>
            <button onClick={showMoreOrLess}>Read less</button>
            </div>)   
        }  else {  
        return( <div> 
          {toShow} 
          <button onClick={showMoreOrLess}>Read more</button>
        </div>)
        }
        } 
    
    

     // End of LongText function
    
    

    function addToBookList() {
        const newBook = {
            title: book.title,
            author: book.authors,
            description: book.description
        };
        fetch('/books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)}).then((res) => res.json()).then((data) => addBookToUser(data))
        }
        
       console.log(book.description)

        function addBookToUser(data) {

            const newUserBook = {
                user_id: user.id,
                book_id: data.id
            };
        fetch('/user_books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserBook)}).then((res) => {
                if (res.ok) {
            res.json().then((data) => updatePosts(data))}
            else {res.json().then((err) => console.log(err));}
        })
        }
        
        function addBook() {
            addToBookList();
        }

    return (
        <div className='column is-4'>
            <div className="card">
            <div className='card-header'>
            <p class="card-header-title">
                {book.title} - {book.authors? book.authors[0] : "N/A" }
                </p>
            </div>
            <div className='card-content'>
                 <div className="content"> 
                    {book.description? LongText(book.description, 100) : "No description"}
               </div>
               </div>
               <footer class="card-footer">
                <button className='card-footer-item' onClick={addBook}> Add to books </button>
                </footer>
            </div>
        </div>
    )
    }

export default SearchBookCard;