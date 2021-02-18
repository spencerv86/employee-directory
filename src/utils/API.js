import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=75&nat=us";

export default {
  getEmployees: function () {
    return axios.get(BASEURL);
  },
};
