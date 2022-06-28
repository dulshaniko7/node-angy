const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

/*
app.get("/", function (req, res) {
    res.send('<h1>Hello</h1>')
})
app.get('/contact', function (req, res) {
    res.send('This is my contact page')
})
app.get('/about', function (req, res) {
    res.send('<h1>Im Dulshan Guys</h1>')
})
app.listen(3000, function (){
    console.log("Server is starting....")
})
*/

app.get('/',function (req, res) {
    res.sendFile(__dirname+'/Cal.html')
})
app.get('/bmi', function (req, res) {
    res.sendFile(__dirname+ '/BMICal.html')
})

app.post('/',function (req, res) {
    const ans = Number(req.body.num1) + Number(req.body.num2)
    res.send('The result is: ' + ans)
})

app.post('/bmi', function (req, res) {
    const www = Number(req.body.w)
    const hhh = Number(req.body.h)
    const ans = (www/hhh/hhh)*10000
    res.send('The result is: ' + ans.toFixed(1))
})
app.listen(3000, function (){
    console.log("Server is starting")
})