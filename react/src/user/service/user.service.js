import axios from 'axios'

const API_URL = `/data/users.json`

const userList = () => {
    axios.get(API_URL, { userId, username, password, email, name, roles})
}