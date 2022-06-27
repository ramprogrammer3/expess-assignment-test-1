/*
1) create a route "/" and send any response and create "/users"
get route and send users data as a response

2) create a "/signup" post route and print the  incoming
data send by the client and send response as a "data receive"
-> send 404 not found if the user is trying to hit the api which is 
not created

3) create 3 route in a different file name - schoolRoutes.js
Api's 
-> register - post
-> student -get 
-> teacther - get 

4) Crete eCommerce.js files  in vies folder in that file you need to
make 2 get Apis 
-> products
-> customer
send response of both the api's by making api call 
*/

let userData = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },]
const express = require('express')
const app = express()
const port = 8080;
const schoolRoutes = require('./views/schoolRoute')
const eCommerceRoutes = require('./views/eCommerece')

app.use(express.json())
app.use("/school",schoolRoutes)
app.use("/commerce",eCommerceRoutes)

// problem 1 start

app.get("/", (req,res)=>{
    res.status(201).send("welcome to express js ")
})
app.get("/user",(req,res)=>{
    res.status(200).json(userData)
})

// problem 1 end  and 2 start

app.post("/signup",(req,res)=>{
    // console.log(req.body)
    // res.status(202).send("Data received ")

    const name = req.body;
    console.log(name)
    if(name){
     return   res.status(202).send("data received")
    }
    if(!name){
     return   res.status(204).json("NO data received ")
    }
})

app.use("*", (req,res)=>{
    return res.status(404).send("404 not found ")
})

// proble 2 end 

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})