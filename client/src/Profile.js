import { useContext, useState } from "react";
import UserContext from "./UserContext";
import 'bulma/css/bulma.css'
// import background from './background.svg'
// import './MainCss.css'
// import './ImageCss.css'

function Profile() {

    const { user, setUser } = useContext(UserContext)
    const [picture, setPicture] = useState("")
    const [isPicClicked, setIsPicClicked] = useState(false)


    //Updating the user profile picture 

    function changePicture(e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ picture })
        })
            .then(res => res.json())
            .then(newUser => setUser(newUser));

    }


    function handlePictureChange(e) {
        setPicture(e.target.value)
    }


    function picClick() {
        setIsPicClicked(!isPicClicked)
    }


    //End of updating the user profile picture 


    //Deleting user function 

    function handleDelete() {
        fetch(`/users/${user.id}`,
            { method: 'DELETE' });

        //including a log out 
        fetch("/logout", {
            method: "DELETE",
        });
        setUser(null)
        alert("Your profile was deleted")

        //REDIRECTION HERE
    }

    console.log(user)

    //End of deleting user function


    return (
        <div>
            <div className="centered">
            <ul>
            <figure class="image is-128x128">
            <img className='is-rounded' src={user.picture} />
            </figure>
            <article className="message is-primary">
                <div className="message-body">
            <h1>{user.first_name} {user.last_name}</h1>
            <h2>{user.totalbooks} books and couting! </h2>
            </div>
            </article>
            <div className="buttons is-fullwidth">
            <button className="button is-success is-light is-focused" onClick={picClick}> Change Profile Picture </button>
            {isPicClicked ? <form onSubmit={changePicture}> <input type="textarea" id="password" value={picture} onChange={handlePictureChange} placeholder='Image URL' /> <button className="button is-success is-light is-focused"> Send </button> </form> : null}
            <button className="button is-success is-light is-focused" onClick={handleDelete}> Delete Profile </button>
            </div>
            </ul>
            </div>
            </div>
    )
}

export default Profile;