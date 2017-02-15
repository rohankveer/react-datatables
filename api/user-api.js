import axios from 'axios';
require('../interceptor/interceptor');

export function getUsers() {

   return axios.get("enter url here")
    .then(response => {
      console.log("api success");
    })
    .catch(function (error) {
      console.log(error);
    });
}
