import axios from "axios";

export default axios.create({
  baseURL: "http://94.237.3.78:4000/api",
  headers: {
    "Content-type": "application/json"
  }
});