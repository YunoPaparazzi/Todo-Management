import { ApiClient } from "./ApiClient"; 


export const retrieveAllTodosForUsernameApi = (username) => ApiClient.get(`users/${username}/todos`)

export const deleteTodoApi = (username, id) => ApiClient.delete(`users/${username}/todos/${id}`)

export const retrieveTodoApi = (username, id) => ApiClient.get(`users/${username}/todos/${id}`)

export const updateTodoApi = (username, id, todo) => ApiClient.put(`users/${username}/todos/${id}`, todo)

export const createTodoApi = (username, todo) => ApiClient.post(`users/${username}/todos`, todo)