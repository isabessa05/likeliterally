import {useContext} from 'react'
import UserContext from './UserContext'
import 'bulma/css/bulma.css'
function Home(){

    const {user} = useContext(UserContext) 

    return (
        <div className='centered'>
            <div className="level-item has-text-centered">
                <h1 className='title is-centered is-1 pb-6'>Like...literally</h1>
                <div className="level-item has-text-centered">
            {user? <h1 className='subtitle is-centered is-4'>Welcome {user.first_name}</h1> : <h1 className='title is-centered is-1'>Please log in or Sign Up</h1>}
            </div>
            </div>
        </div>
    )
}

export default Home;