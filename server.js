// const http = require("http"); 
// const fs = require('fs')

// http.createServer(function(request, response){
// 	response.setHeader("Content-Type", "text/html; charset=utf-8;"); 

// 	if(request.url === "/owls" || request.url === "/"){ // маршрут 1

//         fs.readFile("index.html", "utf8", function(error, data){
//             data = data.replace("{head}", siteHead);
//             response.end(data);
//         })
		
// 	}
// 	// else if(request.url == "/data"){ // маршрут 2 
		
// 	// 	response.write("<h2>"+data+"</h2>");
// 	// }
// 	// else if(request.url == "/contact"){ // маршрут 3
// 	// 	response.write(htmll); }
// 	else{
// 		fontSize = randFontSize();
// 	response.write('<h2 style="font-size:'+fontSize+'">Not found</h2>'); // маршрут не обнаружен
// 	}
// 	response.end();
// }).listen(3000);

const http= require("http");
const fs = require("fs");
http.createServer(function(request, response){
    fs.readFile("/Users/heidi/Documents/GitHub/actual-lb4/index.html",+ "style.css", "utf8", function(error, data){
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(data);
        response.end();
    })
}).listen(3000);