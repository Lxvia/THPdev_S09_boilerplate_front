import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: "http://localhost:3000" });
const API2 = axios.create({ baseURL: "http://localhost:3000" });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${headers.Authorization || Cookies.get("token")}`,
  },
}));

export default class APIManager {
  static async registerUser(email, password) {
    const response = await API.post("/users", { "user": { "email": email, "password": password } });
    console.log(response.headers.authorization);
    const jwt = response.headers.authorization.slice(7);
    Cookies.set("token", jwt);
    return response.data;
  }

  static async loginUser(email, password) {
    const response = await API2.post("/users/sign_in", { "user": { "email": email, "password": password } }, {
        headers: {
        'Content-Type': 'application/json'
        }
      });
    console.log(response.headers.authorization.slice(7))
    const jwt = response.headers.authorization.slice(7);
    Cookies.set("token", jwt);
    return response.data;
    }

  static async logoutUser() {
    const response = await API.delete("/users/sign_out")
    Cookies.remove('token')
    return response.data;
  }
}