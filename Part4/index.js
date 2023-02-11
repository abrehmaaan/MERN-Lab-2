import fs from 'fs';
import http from 'http';
const server = http.createServer((request, response)=>{
    if(request.url == "/"||request.url == "/home") {
        fs.readFile('home.html', (err, data)=>{
            response.end(data);
        })
    }
    else if(request.url == "/signin") {
        fs.readFile('signin.html', (err, data)=>{
            response.end(data);
        })
    }
    else if(request.url == "/signup") {
        fs.readFile('signup.html', (err, data)=>{
            response.end(data);
        })
    }
    else if(request.url == "/about"){
        fs.readFile('about.html', (err, data)=>{
            response.end(data);
        })
    }
    else if(request.url == "/contact"){
        fs.readFile('contact.html', (err, data)=>{
            response.end(data);
        })
    }
    else{
        fs.readFile('error.html', (err, data)=>{
            response.end(data);
        })
    }
})
server.listen(8000, "localhost", ()=>{
    console.log("Server running...");
})