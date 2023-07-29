import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi, retrieveTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";


function ListTodosComponent(){

    const today = new Date();

    const targetDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDay());

    const navigate = useNavigate();

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    const username = authContext.username

    useEffect ( () => refreshTodos(), [] )

    function refreshTodos(){
    retrieveAllTodosForUsernameApi(username)
        .then( response =>
        {
            setTodos(response.data)
        }
    
        )
        .catch( error => console.log(error) )
    }

    function deleteTodo(id){

        deleteTodoApi(username, id)
            .then(
                    () => {
                    setMessage(`Todo with id: ${id} has been deleted successfully!`)
                    refreshTodos()
                }
            )
            .catch( error => console.log(error) )
    }

    function updateTodo(id){

        navigate(`/todos/${id}`)
        retrieveTodoApi(username, id)
            .then( response => console.log(response))
            .catch ( error => console.log(error) )
    }

    function addNewTodo(){
        navigate(`/todos/-1`)
    }

    return( 
        <div className="container">
        <h1> Find your list of Things-to-do </h1>
        { message && <div className="alert alert-warning">{message}</div>}
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Done?</th>
                        <th>Target Date</th>
                        <th>Delete</th>
                        <th>Update</th>                       
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr>
                                    {/* <td>{todo.id}</td> */}
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td> <button className="btn btn-warning" onClick={ () => deleteTodo(todo.id) }>Delete</button></td>
                                    <td> <button className="btn btn-success" onClick={ () => updateTodo(todo.id) }>Update</button></td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
        <div>
            <div className="btn btn-success m-5" onClick={ addNewTodo }>Add New Todo</div>
        </div>
        </div>
    )
}

export default ListTodosComponent