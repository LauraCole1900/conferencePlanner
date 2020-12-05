import axios from "axios";

const API = {
  // Gets all conferences from DB
  getConference: function() {
    return axios.get("/api/conference");
  },

  getConferencebyUser: function(user) {
      console.log(user)
      return axios.get("/api/conference/user", user)
  },
//save conference to DB
  saveConference: function(confData) {
      console.log(confData)
      return axios.post("/api/conference", confData)
  },


  //Get all users from DB
  getUsers: function() {
    return axios.get("/api/users");
  },
  //save user to DB
  saveUser: function(userData) {
      return axios.post("/api/user", userData);
  } 


};


export default API;