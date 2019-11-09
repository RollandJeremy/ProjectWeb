import axios from "axios";

export default {
  getData: function() {
    return axios.get("http://localhost:4000/data/getAll");
  },
  signin: function(username, password) {
    return axios.post(
      "http://localhost:4000/user/signin",
      { username, password },
      { "Content-Type": "application/json" }
    );
  },
  signup: function(username, password) {
    return axios.post(
      "http://localhost:4000/user/signup",
      { username, password },
      { "Content-Type": "application/json" }
    );
  }
};
