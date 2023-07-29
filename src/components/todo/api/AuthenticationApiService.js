import { ApiClient } from "./ApiClient"

export const executeBasicAuthenticationService 
= (token) => ApiClient.get(`/basicauth`,{
    headers:{
        Authorization: token
    }
})

export const executeJwtAuthenticationService 
= (username, password) => ApiClient.post(`/authenticate`,{username, password})