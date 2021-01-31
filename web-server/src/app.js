const express = require("express");
const hbs=require('hbs')
const path=require('path')
const geocode=require('./utils/geocode.js')
const weather=require('./utils/weather.js')
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get("/", (req,res)=>{
    res.render('index',{
        Title:"Main Page"
    })
})

app.get("/weather/",(req,res)=>{
    if(!req.query.location){
        return res.send({
            Error:"Please enter place name to search"
        })
    }
    geocode(req.query.location,(error,{latitude,longitude}={})=>{
       if(error){
           return res.send({error})
       }
    
        weather(latitude,longitude,(error,data)=>{
            res.send({data})
        })
    })
    
})

app.get("/About", (req, res) => {
  res.send("Main page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
