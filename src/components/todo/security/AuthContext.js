import { createContext, useContext, useState} from "react";
import { ApiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";

// 1. Create a State
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext) 

//2. Share that created context across with other components 
export default function AuthProvider( {children} ){
    
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // function login(username, password){
    //     if(username == "Ashish Jadhav" && password == "javaisfun"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true;
    //     }else{
    //             setAuthenticated(false)
    //             setUsername(null)
    //             return false;
    //         }
    //     }

//     async function login(username, password){
//         const batoken = 'Basic ' + window.btoa( username + ":" + password)
        
//         try{
//             const response = await executeBasicAuthenticationService(batoken); 
//             if(response.status == 200){
//                 setAuthenticated(true)
//                 setToken(batoken)

//                 ApiClient.interceptors.request.use(
//                     (config) => {
//                         console.log('intercepting and adding a token')
//                         config.headers.Authorization = batoken
//                         return config
//                     }
//                 )
//                 return true
//             }else{
//                 logout()
//                 return false
//             }
//         }catch (error) {
//             logout()
//             return false
//         } 
//  }   
    
async function login(username, password){
    try{
        const response = await executeJwtAuthenticationService(username, password)
        if(response.status == 200){
            const jwtToken = 'Bearer ' + response.data.token
            setAuthenticated(true)
            setUsername(username)
            setToken(jwtToken)

            ApiClient.interceptors.request.use(
                (config) => {
                    console.log('intercepting and adding a token')
                    config.headers.Authorization = jwtToken
                    return config
                }
            )
            return true
        }else{
            logout()
            return false
        }
    }catch (error) {
        logout()
        return false
    } 
}   
    function logout(){
        setAuthenticated(false)
        setToken(null)
        setUsername(null)
    }

    return(
            <AuthContext.Provider value = { {isAuthenticated, login, logout, username, token} }>
                {children}
            </AuthContext.Provider>  
    )
}