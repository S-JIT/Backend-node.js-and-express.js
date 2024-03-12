const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>Hi, i am satya</h1>");
    res.end();

}).listen(4500);