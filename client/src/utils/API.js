import axios from "axios";

const API = {
  // Gets all conferences
  getConference: function() {
    return axios.get("/api/conference");
  },
  saveConference: function(confData) {
      console.log(confData)
      return axios.post("/api/conference", confData)
  },


  //Get all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  saveUser: function(userData) {
      return axios.post("/api/user", userData);
  } 


};


export default API;