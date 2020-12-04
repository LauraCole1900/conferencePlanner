import axios from "axios";

export default {
  // Gets all conferences
  getConferences: function() {
    const allConferences = axios.get("/api/conference");
    return allConferences
  },
  //Get all users
  getUsers: function() {
    return axios.get("/api/users");
  }
};
