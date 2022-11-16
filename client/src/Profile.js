import { useContext, useState } from "react";
import UserContext from "./UserContext";
import background from './background.svg'
import './MainCss.css'

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
        <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
        height:'99vh',width:'100vw'}}>
            <div className="centered">
            <img src={user.picture} />
            <div></div>
            <ul>
            <h1>{user.first_name} {user.last_name}</h1>
            <h2>{user.totalbooks} books and couting! </h2>
            <button onClick={picClick}> Change Profile Picture </button>
            {isPicClicked ? <form onSubmit={changePicture}> <input type="textarea" id="password" value={picture} onChange={handlePictureChange} placeholder='Image URL' /> <button> Send </button> </form> : null}
            <button onClick={handleDelete}> Delete Profile </button>
            </ul>
            </div>
            </div>
    )
}

export default Profile;