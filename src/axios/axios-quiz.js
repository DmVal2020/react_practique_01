import axios from "axios";

export default axios.create({
    baseURL: 'https://react-practique-1-default-rtdb.firebaseio.com/'
  })