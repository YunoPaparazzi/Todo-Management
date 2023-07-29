import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";

function WelcomeComponent(){
    const {username} = useParams();
    
    const [message, setMessage] = useState(null)

    const authContext = useAuth()
    
    function callHelloWorldRestApi(){

        console.log('called')
        
        retrieveHelloWorldPathVariable('Paul Allen', authContext.token)
             .then( (response) => succesfullResponse(response) )
             .catch( (error) => errorResponse(error) )
             .finally( () => console.log('clean up'))
               
    }

    function succesfullResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }
    
    return(
        <div className="Welcome">
            <h1> Welcome {username}, hope you have a wonderful experience. </h1>
            <div>
                Manage your todos <Link to='/todos'>here.</Link>
            </div>
            <div>
            <button className="btn btn-success m-5" onClick={ callHelloWorldRestApi }>
                    Call Hello World
                </button>
            </div>
            <div className="text-info">
                { message }
            </div>
        </div>
    )
}

export default WelcomeComponent
