import { useContext, useState, useEffect } from 'react'
import UserContext from './UserContext'
import BookCard from './BookCard'
import request from 'superagent'
import SearchBookCard from './SearchBookCard'
import 'bulma/css/bulma.css'
import './MainCss.css'

function Books() {

    const { user, setUser } = useContext(UserContext)
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])
    const [userBooks, setUserBooks] = useState(user.books)
    // const [books, setBooks] = useState([])

    //This useEffect allows me to rerender the page and still get my books array
    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) =>
            response.json()).then((user) => setUserBooks(user.books));
    },);



    function searchData(e) {
        setSearch(e.target.value);
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: search })
            .then((data) => {
                setBookData(data.body.items)
            })

    }
    function updatePosts(newBooks) {
        setSearch("")
        // console.log(newBooks.book_id)
        // let newBooksArray = userBooks.filter(el => el.id == newBooks.book_id)
        // console.log(newBooksArray)
        fetch("/me").then((response) => {
            if (response.ok) {
                response.json().then((user) => setUserBooks(user.books));
            }
        });
    }


    function deleteBook(bookId) {
        fetch(`/user_books/${bookId}`,
            { method: 'DELETE' });
        let newArray = userBooks.filter(el => el.id !== bookId)
        setUserBooks(newArray)
    }


    
    const displayBooks = userBooks?.map((book) => {
        return <BookCard key={book.title} book={book} deleteBook={deleteBook} />
    })




    const displaySearchedBooks = bookData.map((book) => {
        return <SearchBookCard book={book.volumeInfo} updatePosts={updatePosts} />
    })



    return (
        <div className='content'>
                <h1 className='has-text-centered'>my books</h1>
                <input class="input is-rounded" onChange={searchData} type='textarea' placeholder='Search books' />
            <div className='container'>
                <section className='section'>
                    <div className='columns is-multiline '>
                          {search === ("") ? displayBooks : displaySearchedBooks}
                    </div>
                </section>
            </div>

        </div>



    )
}

export default Books;

