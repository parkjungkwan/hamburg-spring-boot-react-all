import axios from 'axios'

export const getList = () =>{
    alert(`2 서비스 내부`)
    return axios.get("http://localhost:8080/users")
}

