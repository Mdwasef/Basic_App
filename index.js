require('dotenv').config()

const express= require('express')
// import express from "express";



const app=express()
const port=3000

app.get('/',(req,res)=>{
res.send('hello world !!!')
})

app.get('/twitter',(req,res)=>{
res.send('twitter url and name')
})

app.get('/profile',(req,res)=>{
res.send("<h1>this is profile..</h1>")
})

app.get('/fun',(req,res)=>{
    res.send('just for fun....')
})

app.listen(process.env.PORT,()=>{
    console.log(`listen is performed on ${port}`)
})