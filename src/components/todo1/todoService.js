import axios from "axios";

const baseURL = "http://localhost:8080/todo"

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

    return {getTime:getTime, getList:getList}
}

export default todoService()