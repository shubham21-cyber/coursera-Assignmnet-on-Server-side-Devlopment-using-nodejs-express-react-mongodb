//Including  external packages
const express = require('express');
const bodyPaser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyPaser.json());

//End Point Route
leaderRouter.route('/')

.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send all the leaders to you!");
})
.post((req,res,next)=>{
    res.end("will add the leader: "+ req.body.name + ' with details: '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders");
})
//dangerous
.delete((req,res,next)=>{
    res.end("Deleting all leaders");
});




//leaderRoute id :
leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end("Will send details of the leader: "+req.params.leaderId + " to you");
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("POST operation not supported on /leader/"+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write("Updating the leader: "+req.params.leaderId + '\n');
    res.end("Will update the leader: "+req.body.name + " with details: "+req.body.description);
})
//dangerous
.delete((req,res,next)=>{
    res.end("Deleting leader: "+req.params.leaderId);
});
module.exports = leaderRouter;