import axios from 'axios';

export function getData() {

   return axios.get("../data/data.json")
    .then(response => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
