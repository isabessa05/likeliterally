import { useContext } from "react";
import UserContext from "./UserContext";
import backpic from "./literally.png";
import "bulma/css/bulma.css";
function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="centered" style={{ backgroundImage: `url(${backpic})` }}>
      <div className="level-item has-text-centered">
        {/* <h1 className='title is-centered is-1 pb-6 has-text-centered is-family-secondary'></h1> */}
        {/* <img src={backpic}/> */}
        <div className="card">
          <div className="card-header has-background-success-light">
            <p class="card-header-title is-centered is-size-3 is-family-secondary"> Welcome to literally</p>
          </div>
          <div className='card-content'>
                <div className="content"> 
          <div className="level-item has-text-centered is-italic">
            {user ? (
              <p className="subtitle is-centered is-size-5 is-small is-family-secondary">
                howdy {user.first_name}!
              </p>
            ) : (
              <p className="subtitle  is-size-5 is-small is-family-secondary">
                Please log in or Sign Up
              </p>
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
