
const express = require('express')
const axios = require('axios')
const router = express.Router();

router.get("/products",async(req,res)=>{
const response = await axios.get("https://api.itbook.store/1.0/search/mongodb")
res.json(response.data.books)
})

router.get("/users",(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        res.json(response.data)
    }).catch((err)=>{
        res.json(err)
    })
})

module.exports = router;