import { ApiClient } from "./ApiClient";

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean = () => ApiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (username, token) => ApiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization: token
    }
})

