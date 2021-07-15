import axios from "axios";

const baseURL = "http://localhost:8080/todo"

const headerObj = {headers: {'Content-Type': 'application/json'}}

const todoService = () => {

    const getTime = async () => {
        console.log("getTime...........")
        const result = await axios.get(baseURL+"/now")
        return result
    }

    const getList = async (page) => {
        const result = await axios.get(baseURL+"/pages?page="+page)
        const data = await result.data
        return data
    }
    const registTodo = async (todo) => {

        const todoStr = JSON.stringify(todo)

        const result = await axios.post(baseURL, todoStr, headerObj )

        const data = await result.data
        return data
    }

    const getOne = async (tno) => {
        const result = await axios.get(baseURL+"/"+tno)
        const data = await result.data
        return data
    }

    const removeOne = async (todo) => {
        const result =  await axios.delete(baseURL+"/"+todo.tno,
            {data: todo, headers:headerObj} )
        const data = await result.data
        return data
    }

    return {getTime, getList, registTodo, getOne, removeOne}
}

export default todoService()