import './PostCard.css'
import { useContext } from 'react';
import UserContext from './UserContext';
function PostCard({post}) {

    const { user, setUser } = useContext(UserContext)

    return (
        <div className='column'>
            <div className="card">
                <h2>{user.first_name}</h2>
                <h4> book: {post.book_title} </h4>
                <h4> page: {post.page} </h4>
                <li> {post.quote} </li>
            </div>
        </div>
    )
}

export default PostCard;