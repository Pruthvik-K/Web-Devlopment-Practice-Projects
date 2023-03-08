const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");
    
});

app.post("/", function(req, res){

    const query = req.body.cityName;
    const apikey = "f2c89b003be3c8477ab4127121a2b4fa";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=${unit}`;
    console.log(url);
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

            res.write("<p>The weather is currently "+ weatherDescription+"</p1>");
            res.write("<h1>The temprature in "+query+" is "+ temp + " degrees Celcius.</h1>");
            res.write( `<img src=${imageURL} alt="weather-img">`)
            res.send();
        });
    });

   

    console.log("Post received");
})


app.listen(process.env.PORT  || 3000, function(){
    console.log("server is listening");
})










// const query = "London";
//     const apikey = "f2c89b003be3c8477ab4127121a2b4fa";
//     const unit = "metric";
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=${unit}`;
//     console.log(url);
//     https.get(url, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(data){
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description
//             const icon = weatherData.weather[0].icon
//             const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

//             res.write("<p>The weather is currently "+ weatherDescription+"</p1>");
//             res.write("<h1>The temprature in London is "+ temp + " degrees Celcius.</h1>");
//             res.write( `<img src=${imageURL} alt="weather-img">`)
//             res.send();
//         });
//     });

   