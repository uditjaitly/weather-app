const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiamFpdGx5dWRpdCIsImEiOiJja2toYzhoNDMwMGhxMndtd2U1aTRpdzExIn0.eymisWkRFTVnW9TJnX5emg";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Error fetching data", undefined);
    } else if (response.body.features.length <= 0) {
      callback("Location not found", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1]
      });
    }
  });
};

const weather=((latitude, longitude ,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=87ad05b5dfd85f29cc46e4a1496d7499&query=" + longitude + "," +latitude
    request({url:url, json:true},(error,response)=>{
        if(error){
            callback("Failed to get data",undefined)
        }
        else{
            callback(undefined, {
                location: response.body.location.region,
                temperature: response.body.current.temperature
            })
        }
    })
})



geocode("New York", (error, data) => {
  console.log(error,data);
  weather(data.latitude,data.longitude,(error,data)=>{
    console.log(error,data);
  })
});


