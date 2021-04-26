var http=require('http');
url=require('url');
querystring = require('querystring');
var dt=require('./calcy2');
http.createServer(function(req,res){
var p=url.parse(req.url);
var q=p.query;
var a = Number.parseInt(querystring.parse(q)["n1"]);
var b=Number.parseInt(querystring.parse(q)["n2"]);
var c=(querystring.parse(q)["b"]);
console.log("Calculator");
res.writeHead(200,{'Content-Type':'text/html'});
if(c=='+')
{
res.write("The sum is "+dt.add(a,b)+"<br>");
}
else if(c=='-')
{
res.write("The Subtraction is "+dt.sub(a,b)+"<br>");
}
else if(c=='*')
{
res.write("The Multiplication is "+dt.mul(a,b)+"<br>");
}
else if(c=='/')
{
res.write("The Division is "+dt.div(a,b)+"<br>");
}
else if(c=='^')
{
res.write("The Square of a number is "+dt.pow(a)+"<br>");
}
res.end();
}).listen(3333);