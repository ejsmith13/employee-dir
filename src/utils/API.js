import axios from "axios";



export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/");
  },
  getSeed: function() {
    return axios.get("https://randomuser.me/api/?seed=chocolatetangerine");
  },
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=25&nat=US");
  }
};
