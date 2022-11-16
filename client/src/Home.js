import {useContext} from 'react'
import UserContext from './UserContext'
import background from './background.svg'
import './MainCss.css'
function Home(){

    

    const {user, setUser} = useContext(UserContext) 

    return (
        <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", 
        height:'100vh',width:'100vw'
        }}>
            <div className='centered'>
            <br></br>
            <>{user? <h1>Welcome to literally, {user.first_name}</h1> : <h1>Please log in or Sign Up</h1>} </>
            </div>
        </div>
    )
}

export default Home;