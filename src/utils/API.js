import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/");
  },
  getSeed: function() {
    return axios.get("https://randomuser.me/api/?seed=chocolatetangerine");
  },
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=50");
  }
};
