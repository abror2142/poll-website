import axios from "axios";

/*
    To make requests to the same backend url can be 
    made easier by assigning baseURL to axios
*/

export default axios.create({
    baseURL: 'http://localhost:8000'
})