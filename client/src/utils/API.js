import axios from "axios";

const API = {
  // Gets all conferences from DB
  getConference: function () {
    return axios.get("/api/conference");
  },
  // get conference by user email
  getConferencebyUser: function (email) {
    return axios.get(`/api/conference/${email}`)
  },
  // update confrence attending field
  updateRegisteredById: function (id, email) {
      console.log("from API")
      console.log(id)
      console.log(email)
    return axios.put(`/api/conference/id/${id}`, email)
  },

  //save conference to DB
  saveConference: function (confData) {
    console.log(confData)
    return axios.post("/api/conference/post", confData)
  },

  //Get all users from DB
  getUsers: function () {
    return axios.get("/api/users");
  },
  //save user to DB
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  }


};


export default API;