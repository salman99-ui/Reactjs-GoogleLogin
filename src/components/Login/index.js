import React , {useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import './style.css'
const response = (data) => {
    console.log(data)
}
function Login() {
    const [user , setUser] = useState({
        username : '' ,
        password : ''
    })
   
    const setUsername = (data) => {
        setUser({ ...user , username : data} )
    }

    const setPassword = (data) => {
        setUser({...user , password : data})
    }


    const handleSubmit = (e) => {
        console.log(user)
        axios.post("http://localhost:9000/login",user)
        .then(data => console.log(data))
        .catch(data => console.log(data))
        e.preventDefault()

    }
    return (
        <div className="container">
            <div className="Form">
                <h2 className="Title">Login</h2>
                    <div className="forminput">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="input" onChange={(e) => setUsername(e.target.value)} placeholder="Username" name="username" />
                            <input type="text" className="input" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" />
                            <button type="submit" className="button">Sign In</button>
                        </form>
                    </div>

                    <div className="googleSign">
                        <h3 className="or">Or</h3>
                        <GoogleLogin
                        clientId="897389787521-pqme3iu23edjqdsobd2h6a0uiel4bcvq.apps.googleusercontent.com"
                        onSuccess={response}
                        onFailure={response}
                        className="google" 
                        />
                    </div>
            </div>
        </div>
    )
}

export default Login
