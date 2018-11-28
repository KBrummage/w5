// import axios from "axios"

// export default{

// }
import axios from "axios";

import { Constants } from "expo";

const { manifest } = Constants;
const apiHost =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:3030`)
    : `api.example.com`;

export default {
    // Gets all Maps
    submitForm: (formData) => {
        //if ofrm data received value
        //post into database since no db then
        console.log(formData)
        return Promise.resolve()
    },
    // Saves a location to the database
    saveLocation: (mapData) => {
        let latitude = mapData.coords.latitude;
        let longitude = mapData.coords.longitude;
        let date = new Date(mapData.timestamp);
        let endPoint = "http://" + apiHost + "/api/maps/"

        console.log("\n")
        console.log(`Latitude: ${latitude}`)
        console.log(`Longitude: ${longitude}`)
        console.log(`Timestamp: ${date}`)
        console.log(`Endpoint ${endPoint}`);
        //return axios.post("/", mapData);

        axios.post(endPoint, {
            latitude: latitude,
            longitude: longitude,
            date: date
          })
          .then(function (response) {
            console.log(response.data);
            console.log("Saved to Database");
          })
          .catch(function (error) {
            console.log("error reached")
            console.log(error);
          });


    }

};
