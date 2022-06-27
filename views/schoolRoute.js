

const express = require('express')
const router =express.Router();

router.post("/register",(req,res)=>{
    res.send(" data received in register post ")
})

router.get("/getStudents",(req,res)=>{
    res.send("students data ")
})

router.get("/getTeacher",(req,res)=>{
    res.send("Teacher  data ")
})

module.exports= router;