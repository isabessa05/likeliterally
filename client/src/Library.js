import './MainCss.css'
import { useState, useEffect } from "react";
import BookCard from './BookCard';
import request from 'superagent'
import SearchBookCard from './SearchBookCard'

function Library () {

    const [allBooks, setAllBooks] = useState([])
    const [bookData, setBookData] = useState([])
    const [search, setSearch] = useState("")


    function searchData(e) {
        setSearch(e.target.value);
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: search })
            .then((data) => {
                setBookData(data.body.items)
            })

    }

    useEffect(() => {
        fetch("/books").then((response) => {
          if (response.ok) {
            response.json().then((books) => setAllBooks(books));
          }
        });
      }, []);

    //   function updatePosts(newBooks) {
    //     setSearch("")
    //     // console.log(newBooks.book_id)
    //     // let newBooksArray = userBooks.filter(el => el.id == newBooks.book_id)
    //     // console.log(newBooksArray)
    //     fetch("/books").then((response) => {
    //         if (response.ok) {
    //             response.json().then((user) => setAllBooks(user.books));
    //         }
    //     });
    // }

      const displayAllBooks = allBooks.map((book) => {
        return <BookCard key={book.id} book={book}/>
      })

      const displaySearchedBooks = bookData.map((book) => {
        return <SearchBookCard book={book.volumeInfo} />
    })

    return (
        <div style={{ backgroundColor: '#d6dfcc', backgroundSize: "cover", height: '450vh', width: '100vw' }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ul>
        <h1 style={{  display: 'flex', justifyContent: 'center', fontSize: 50 }}> Welcome to the library </h1>
        <input style={{ display: 'flex', justifyContent: 'center', width: '20vw' }} onChange={searchData} type='textarea' position='left center' placeholder='Search books' />
        {search === ("") ? displayAllBooks : displaySearchedBooks}
        </ul>
        </div>

    )

}

export default Library;