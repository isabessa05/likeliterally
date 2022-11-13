import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {

    const {user, setUser} = useContext(UserContext) 


    return (
        <div>
            
            <img src={user.picture}/>
            <h1>{user.first_name}</h1>
            <h2>{user.totalbooks}</h2>

        </div>
    )
}

export default Profile;