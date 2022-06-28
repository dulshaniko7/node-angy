const express = require('express');
const https = require('https');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) =>{
    const query = 'london'
    const units = 'metric'
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=9525d72f458dcb0369123f9907ee2b12`, function(response){
        response.on('data', function(data){
            const apiData = JSON.parse(data)
            const des = apiData.weather[0].description
            const icon = apiData.weather[0].icon
            const temp = apiData.main.temp
            const img = `http://openweathermap.org/img/wn/${icon}@2x.png`

            res.write("<h1>Temp is "+ temp + "in Celcius</h1>")
            res.write("<p>and "+ des +"</p>")
            res.write("<img src="+img+">")
            res.send()
        })
    })

})

app.get('/weather', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

const getTemp = (city) => {
    let apiData = []
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9525d72f458dcb0369123f9907ee2b12` , function(res){
        res.on('data', function (data) {
             apiData = JSON.parse(data)
           const temp = apiData.main.temp
            const icon = apiData.weather[0].icon
            const img = `http://openweathermap.org/img/wn/${icon}@6x.png`
        })

    })

}


app.post('/weather', function (req,res) {
    const city = req.body.city
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9525d72f458dcb0369123f9907ee2b12` , function(response){
        response.on('data', function (data) {
         const  apiData = JSON.parse(data)
            const temp = apiData.main.temp
            const icon = apiData.weather[0].icon
            const des = apiData.weather[0].description
            const img = `http://openweathermap.org/img/wn/${icon}@4x.png`
            res.write("<p> "+ des +"</p>")
            res.write("<h1>Temperature in "+ city + " is "+ temp +" Celcius</h1>")
            res.write("<img src="+img+">")
            res.send()
        })
    })
})


app.listen(3000, function (){
    console.log('server is running')
})