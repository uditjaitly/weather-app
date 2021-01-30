const { response } = require("express");
const request=require("request")

const weather=(latitude,longitude,callback)=>{
    url="http://api.weatherstack.com/current?access_key=87ad05b5dfd85f29cc46e4a1496d7499&query=" + latitude + "," +longitude;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Cannot fetch weather data",undefined);
        }
        else{
            callback(undefined,{
                location: response.body.location.region,
                temperature: response.body.current.temperature
            })
        }
    })
}

module.exports=weather