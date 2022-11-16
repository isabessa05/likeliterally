import { useContext, useState, useEffect } from 'react'
import UserContext from './UserContext'
import BookCard from './BookCard'
import request from 'superagent'
import SearchBookCard from './SearchBookCard'

function Books() {

    const { user, setUser } = useContext(UserContext)
    const [search, setSearch] = useState("")
    const [bookData, setBookData] = useState([])
    const [userBooks, setUserBooks] = useState(user.books)
    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //     fetch(`/user_books/${user.id}`).then((response) =>
    //         response.json()).then((data) => setBooks(data));
    //     const booksArray = books.map((item) => { return setUserBooks(item.book) })
    // }, []);



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
        console.log(newBooks.book_id)
        let newBooksArray = userBooks.filter(el => el.id == newBooks.book_id)
        console.log(newBooksArray)
    }

    function deleteBook(bookId) {
        fetch(`/user_books/${bookId}`,
            { method: 'DELETE' });
        let newArray = userBooks.filter(el => el.id !== bookId)
        console.log(newArray)
        setUserBooks(newArray)
    }

    // console.log(search)
    // console.log(bookData)

    // const searchFilter = search.map((item) => console.log(item))

    const displayBooks = userBooks.map((book) => {
        return <BookCard key={book.title} book={book} deleteBook={deleteBook} />
    })

    console.log(userBooks)
    // console.log(displayBooks)

    const displaySearchedBooks = bookData.map((book) => {
        return <SearchBookCard book={book.volumeInfo} updatePosts={updatePosts} />
    })


    // console.log(displaySearchedBooks)

    return (
        <div style={{ backgroundColor: '#d6dfcc', backgroundSize:"cover", height:'450vh',width:'100vw'}}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display: 'flex',  justifyContent:'center'}}>
            <h1 >My Books</h1>
            <input onChange={searchData} type='textarea' position='left center' placeholder='Search books' />
            </div>
            {search === ("") ? displayBooks : displaySearchedBooks}
        </div>

    )
}

export default Books;