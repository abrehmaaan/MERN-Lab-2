import http from 'http';
import EventEmitter  from "events";
const event = new EventEmitter();
event.on("serverresponse", ()=>{
    console.log("Info: A response has been sent!");
})
event.on("stringsent", ()=>{
    console.log("Info: A string has been sent!");
})
event.on("jsonsent", ()=>{
    console.log("Info: A JSON has been sent!");
})
event.on("htmlsent", ()=>{
    console.log("Info: An HTML tag has been sent!");
})
const server = http.createServer((request, response)=>{
    if(request.url == "/") {
        response.write("For String = /String\n");
        response.write("For JSON = /JSON\n");
        response.write("For HTML = /HTML\n");
        event.emit("serverresponse");
        response.end();
    }
    else if(request.url == "/String") {
        response.write("<p>Abdul Rehman</p>");
        event.emit("stringsent");
        response.end();
    }
    else if(request.url == "/JSON") {
        const obj = {
            name: "Abdul Rehman"
        }
        const JSONForm = JSON.stringify(obj)
        response.write(JSONForm);
        event.emit("jsonsent");
        response.end();
    }
    else if(request.url == "/HTML"){
        response.write('<p style="color:red;">Abdul Rehman</h1>');
        event.emit("htmlsent");
        response.end();
    }
})
server.listen(8080, "localhost", ()=>{
    console.log("Server running...");
})