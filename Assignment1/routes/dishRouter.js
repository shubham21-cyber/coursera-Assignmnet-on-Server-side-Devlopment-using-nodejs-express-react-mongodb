//Including  external packages
const express = require('express');
const bodyPaser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyPaser.json());

//End Point Route
dishRouter.route('/')

.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the dishes to you!");
})
.post((req,res,next)=>{
    res.end("will add the dish: "+ req.body.name + ' with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
})
//dangerous
.delete((req,res,next)=>{
    res.end("Deleting all dishes");
});




//DishRoute id :
dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send details of the dish: "+req.params.dishId + " to you!");
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/"+req.params.dishId);
})
.put((req,res,next)=>{
    res.write("Updating the dish: "+req.params.dishId + '\n');
    res.end("Will update the dish: "+req.body.name + " with details: "+req.body.description);
})
//dangerous
.delete((req,res,next)=>{
    res.end("Deleting dish: "+req.params.dishId);
});
module.exports = dishRouter;