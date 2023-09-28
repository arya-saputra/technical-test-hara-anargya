import axios from "axios";

function GetUsers() {
    return axios.get('https://api.slingacademy.com/v1/sample-data/users');
};
export default {
    GetUsers
};