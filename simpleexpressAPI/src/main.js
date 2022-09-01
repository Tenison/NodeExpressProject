const express = require("express")

const app = express()

app.listen(4000, () =>{
    console.log("Server Started")
})

app.get("/", (received, sentBack) =>{
        sentBack.send("request received")
})