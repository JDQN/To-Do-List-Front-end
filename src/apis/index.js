import axios from "axios";

export default axios.create({
    baseURL: "https://todo-list-mac.herokuapp.com"
});