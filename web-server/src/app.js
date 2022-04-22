// const geocode = require('./geocode')
// const forecast = require('./forecast')
const express = require('express')
const port = process.env.PORT || 3000
const app=express()



app.get('/',(req,res)=>{
    res.send('index.html')
})

app.get('/test_text',(req,res)=>{
    res.send("18360859002")
})

app.get('/test_html',(req,res)=>{
    res.send("<p>Burak Emre Terzi</p>")
})

app.get('/test_json',(req,res)=>{
    res.send()
})

app.get('/test_geocode',(req,res)=>{
    res.send()
})

app.get('/test_weather',(req,res)=>{
    res.send()
})



