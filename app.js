const express = require('express');
const app = express();
const path = require('path')

var http = require('http');
//const data = require('./data');
const publicPath=path.join(__dirname,'Filtering')
app.get('/Brands',(_,res)=>{
    res.sendFile(`${publicPath}/trial.html`)
   
})

// app.set('Filtering engine', 'ejs')
// app.get('/trial',(_,res)=>{
//     res.render('trial')
// });
// http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(8080);

app.get("",(res,rep)=>{
    rep.send("Welcome to the home page")
});



app.listen(3000);