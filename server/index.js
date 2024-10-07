// import
const { Socket } = require("express");
const express=require("express")
const app=express()
const http=require("http")
const {server}=require("socket.io")

// create server
const server=http.createServer(app);
// socket init
const io=new Server(server)

// connexion management
io.on("connection",(socket)=>{
    console.log(`user connected: ${socket.id}`);
});

const PORT=process.env.PORT || 5000;
server.listen(PORT, ()=>console.log('server is running'));