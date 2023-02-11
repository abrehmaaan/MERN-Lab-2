import http from 'http'
const server = http.createServer((request, response)=>{
    response.write("<p>Abdul Rehman</p>");
    response.write("\n");
    const obj = {
        name: "Abdul Rehman"
    }
    const JSONForm = JSON.stringify(obj)
    response.write(JSONForm);
    response.write("\n");
    response.write('<p style="color:red;">Abdul Rehman</h1>');
    response.end();
})
server.listen(8080, "localhost", ()=>{
    console.log("Server running...");
})