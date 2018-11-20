var http=require('http');
var fs = require('fs');
var server=http.createServer(function(req,res){
    if(req.url=='/')
    {
        res.write("This is the home page");
        res.end();
    }
    if(req.url=='/friend')
    {   
        fs.readFile('./friends.txt',function(err,data){
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }
});

server.listen(4500);
console.log("Listening to port 4500");