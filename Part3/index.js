import fs from 'fs';
import http from 'http';
import url from 'url';
const sendmsg = http.createServer((request, response)=>{
    let queryobj = url.parse(request.url, true).query;
    let msg = queryobj.message;
    if(msg!=null){
        let text = "IP Address: "+request.socket.remoteAddress+" Message: "+msg+"\n";
        fs.appendFileSync('ChatHistory.txt',text);
    }
    response.end(msg);
})
sendmsg.listen(8080, "10.141.222.61", ()=>{
    console.log("Server running...");
})
