//Including packages
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//include Express Route files
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const PORT = process.env.PORT || 3000;
const hostname = 'localhost';

const app = express();
app.use(morgan('dev'));

//Middleware use to parse the body of function in JSON format 
app.use(bodyParser.json());

//express Routes
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    res.end('<html><body><h1>This is Html</h1></body></html>');
})

//Creating http server object
const server = http.createServer(app);
server.listen(PORT,hostname,()=>{
    console.log(`server running at http://${hostname} : ${PORT}`)
});