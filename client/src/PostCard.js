// import './PostCard.css'
import { useContext } from "react";
import UserContext from "./UserContext";
import "bulma/css/bulma.css";

function PostCard({ post }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{user.first_name}</p>
        </div>
        <div className="card-content">
          <div className="content is-centered">
            <p> book: {post.book_title} </p>
            <p> page: {post.page} </p>
            <li> {post.quote} </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
