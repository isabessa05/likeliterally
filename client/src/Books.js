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

    function searchData(e) {
        setSearch(e.target.value);
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: search })
            .then((data) => {
                setBookData(data.body.items)
            })

    }
    // function updatePosts() {
    //     setUserBooks(user.books)
    // }

    console.log(search)
    console.log(bookData)

    // const searchFilter = search.map((item) => console.log(item))
    
    const displayBooks = userBooks.map((book) => {
        return <BookCard key={book.title} book={book} />
    })

    const displaySearchedBooks = bookData.map((book) => {
        return <SearchBookCard book={book.volumeInfo}/>
    })


    console.log(displaySearchedBooks)

    return (
        <div>
            <h1>My Books</h1>
            <input onChange={searchData} type='textarea' position='left center' placeholder='Search books' />
            {search === ("") ? displayBooks : displaySearchedBooks}
        </div>

    )
}

export default Books;