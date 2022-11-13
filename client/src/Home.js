import {useContext} from 'react'
import UserContext from './UserContext'

function Home(){

    const {user, setUser} = useContext(UserContext) 

    return (
        <div>
            <h1>Hello</h1>
            {user? <h1>Welcome {user.first_name}</h1> : <h1>Please log in or Sign Up</h1>}
        </div>
    )
}

export default Home;