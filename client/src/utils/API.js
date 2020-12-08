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

  getConferencebyID: function (confId) {
    console.log("from API")
    console.log(confId)
    return axios.get(`/api/conference/id/${confId}`)
  },

  // update conference attending field
  updateRegisteredById: function (id, email) {
    console.log("from API")
    console.log(id)
    console.log(email)
    return axios.put(`/api/conference/id/${id}`, email)
  },
  // delete conference
  deleteConference: function (id) {
    return axios.delete(`/api/conference/delete/${id}`)
  },

  //save conference to DB
  saveConference: function (confData) {
    console.log(confData)
    return axios.post("/api/conference/post", confData)
  },

  //update Conference by confID
  updateConference: function (id, formObj) {
    console.log("from api")
    console.log(id)
    console.log(formObj)
    return axios.put(`/api/conference/update/id/${id}`, formObj)
  },

  //Get all users from DB
  getUsers: function () {
    return axios.get("/api/users");
  },
  //save user to DB
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },

  //saveSession
  saveSession: function (confId) {
    return axios.post("/api/session/post", confId)
  },


  //gets all sessions for a particular conference, called in confDetails
  getSession: function (confId) {
    return axios.get(`/api/session/conference/${confId}`)
  },

};


export default API;