const { response } = require('express');
const request=require('request')
const geocode=(location, callback)=>{
    url="https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    location +
    ".json?access_token=pk.eyJ1IjoiamFpdGx5dWRpdCIsImEiOiJja2toYzhoNDMwMGhxMndtd2U1aTRpdzExIn0.eymisWkRFTVnW9TJnX5emg";

    request({url:url, json:true},(error,response)=>{
        if(error){
            callback("Cannot fetch location data",undefined);
        }
        else if(response.body.features.length==0){
            callback("Cannot find location", undefined)
        }
        else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1]
            })

        }
    })
}

module.exports=geocode
