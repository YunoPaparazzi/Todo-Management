import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent(){
    const [username, setUsername] = useState('Ashish Jadhav');
    
    const[password, setPassword] = useState('');

    // const[ShowSuccessMessage, setShowSuccessMessage] = useState(false)

    // const[ShowErrorMessage, setShowErrorMessage] = useState(false)

    const[message, setMessage] = useState('')

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event){   
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    // function handleSubmit(){
    //     if(username == 'Ashish Jadhav' && password == 'javaisfun'){
    //         console.log('Success')
    //         setShowSuccessMessage(true)
    //         setShowErrorMessage(false)
    //     }
    //     else{
    //         console.log('Failed')
    //         setShowSuccessMessage(false)
    //         setShowErrorMessage(true)
    //     }
    // }

    // function SuccessMessageComponent(){
    //     if(ShowSuccessMessage){
    //         return <div className="successMessage">Authenticated Successfully.</div>
    //     }
    //     return null
    // }

    // function ErrorMessageComponent(){
    //     if(ShowErrorMessage){
    //         return <div className="successMessage">Authentication failed. Please check your credentials!</div>
    //     }
    //     return null
    // }

    async function authenticate(){
        if(await authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }
        else{
            setMessage("Authentication Failed. Please check your credentials!");
        }
    }
    return(
        <div className="Login">
            <h1> Welcome user, kindly login. </h1>
            <div className="LoginForm">
               {/* { ShowSuccessMessage && <div className="successMessage">Authenticated Successfully.</div>}
               { ShowErrorMessage && <div className="successMessage">Authentication failed. Please check your credentials!</div>} */}
               <div className="message">{message}</div>
                <div>
                    <label>Enter Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
            </div>
            <div>
                <label> Enter Password:</label>
                <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button type="button" className="btn-success" name="Login" onClick={authenticate}> Login </button>
            </div>
        </div>
    )
}

export default LoginComponent