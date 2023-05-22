import { useContext, useEffect, useState } from 'react'
import UserContext from './UserContext'
import PostCard from './PostCard'
import 'bulma/css/bulma.css'
// import './PostCard.css'
// import './MainCss.css'



function Feed({ handlePosts }) {
    const { user, setUser } = useContext(UserContext)
    const [error, setError] = useState([])
    const [posts, setPosts] = useState([])
    const [quote, setQuote] = useState ("")
    const [page, setPage] = useState("")
    const [book, setBook] = useState("")

    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);

      useEffect(() => {
        fetch(`/posts/${user.id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((postsData) => setPosts(postsData))
                    setError([])
                }
                else {
                    r.json().then((err) => setError(err));
                }
            })
    });


    //show all errors
    const allErrors = <h1 key={error}>{error.error}</h1>

    const userBooks = user.books

    // display posts in a card
    const displayPosts = posts.map((post) => { 
        return <PostCard key={post.id} post={post} />
    })

    //Create a new post 

    //1.Handling the value inputs

    const handleChangeQuote = (event) =>{
        setQuote(event.target.value);
    }
    
    const handleChangePage =(event) =>{
      setPage(event.target.value)
    }
    
    const handleChangeBook = (event) =>{
      setBook(event.target.value)
    }

    //Relating those elements into one variable


    function handleSubmit(e){
        e.preventDefault();
        const newPost = {
            page: page,
            book_title: book,
            quote: quote,
        }
        fetch('/posts', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)}).then(res => res.json()).then(newPostData => setPosts([...posts, newPostData]));
          }
    //




    return (
        <div>
            <div style={{display: 'flex',  justifyContent:'center'}} >
            <form onSubmit= {(e) => handleSubmit(e)}>
            <h1 style={{fontSize: 50}}> Welcome to your feed </h1>
            <input type="textarea" id="password" className="input is-success" value={quote} onChange={handleChangeQuote} placeholder='What is happening?' />
            <input type="textarea" id="password" className="input is-success" value={page} onChange={handleChangePage} placeholder='Page N' />
            <div className="select is-success" >
            <select onChange= {handleChangeBook} >
                <option>Select Book</option>
                {user? userBooks.map(item => (<option value={item.name} key={item.id} >{item.title}</option>)) : null}
            </select>
            </div>
            <div className="buttons is-fullwidth">
            <button className="button is-success is-light is-focused"> Post! </button>
            </div>
            </form>
            </div>
            <div className='container'>
                <section className='section'>
                    <div className='columns is-multiline '>
                          {displayPosts}
                    </div>
                </section>
            </div>
            {error ? allErrors : null}
        </div>

    )
}

export default Feed;