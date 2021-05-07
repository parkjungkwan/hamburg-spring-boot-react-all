import axios from 'axios'

const findAll = () => axios.get("http://localhost:8080/users/findAll")

    
    
export default { findAll }