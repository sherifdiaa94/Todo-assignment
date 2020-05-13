import express from 'express';
import {NextFunction} from 'express';
var bodyParser = require('body-parser');
var cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.text({ type: 'text/plain' }));




let todoList=[
  {id:0,
    item:"Study",
    completed:"false"},
    {id:1,
    item:"Walk",
    completed:"false"},
    {id:2,
    item:"Work",
    completed:"false"}
];

function Middleware1(request: any, response: express.Response, next:NextFunction) {
  if (request.path!=="/todoApp/api/health"){
  //console.log(`${request.method} ${request.path}`);
  var fs = require('fs');
 
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key:any, value:any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  
  let jsonRequest=JSON.stringify(request,getCircularReplacer());

  //console.log(jsonContent);
  
  fs.appendFileSync("Logfile.log","\n\nRequest: \n", 'utf8',function(err:any) {
    if (err) {
        console.log(err);
    }
  });

  fs.appendFileSync("Logfile.log",jsonRequest, 'utf8',function(err:any) {
    if (err) {
        console.log(err);
    }
  });
  

  let jsonResponse=JSON.stringify(response,getCircularReplacer());
  fs.appendFileSync("Logfile.log","\n\nResponse: \n", 'utf8',function(err:any) {
    if (err) {
        console.log(err);
    }
  });

  fs.appendFileSync("Logfile.log",jsonResponse, 'utf8',function(err:any) {
    if (err) {
        console.log(err);
    }
  });
  
  next();
  }else{
    next();
  }
}

declare module 'express' {
    interface Request {
        headerFound: string;
    }
}

app.use(Middleware1);




function Middleware2(request:any, response: express.Response, next:NextFunction) {
  if (request.path!=="/todoApp/api/health"){
    if((JSON.stringify(request.headers['csrf-token'])) && (JSON.stringify(request.headers['x-gateway-apikey']))){
      //console.log("Found")
      request.headerFound="Found"
      //response.Headers("Found")
      //return "Found"
    }else{
      //console.log("Not Found")
      request.headerFound="NotFound"
      //response.json({"Headers":"Not found"})
      //return {"Headers":"Not found"}
    }
    next()
  }
  next()
}

app.use(Middleware2);

const healthstatus={
  status: "Node server is up and running on port 81"
}

app.get('/todoApp/api/health', function(req, res) {
  res.json(healthstatus);
  
});
 
app.get('/todoApp/api/todos', function(req:any, res) {
  if (req.headerFound==="Found"){
  res.status(200).json(todoList);
  }else{
    res.status(404)
       .json({"Headers":"Not found"})
  }
  //res.send(todoList);
  //res.status(200).json(todoList);
});

app.get('*', function(req, res){
  res.send('Invalid route');
});

app.post('/todoApp/api/todos', function (req:any,res){
  //console.log("Inside post"+req)
  if (req.headerFound==="Found"){
    todoList.push(req.body);
    res.json(todoList);
    }else{
      res.status(404)
      .json({"Headers":"Not found"})
     }
});


app.delete('/todoApp/api/todos/:id', function (req:any,res){
  //console.log("Inside delete"+req.headerFound)
  if (req.headerFound==="Found"){
    if(todoList.length!==0){
      var indexof = todoList.findIndex(obj => obj.id==req.params.id);
      if (indexof<0){
        res.send('Invalid Item');
        }
      else{
            //console.log(todoList[indexof])
            const index=req.params.id
          if (indexof > -1) {
            todoList.splice(indexof, 1);
          }
          res.json(todoList);
        }
      }
      else{
        res.json(todoList);
      }
    }else{
      res.status(404)
      .json({"Headers":"Not found"})
    }

  
});


app.patch('/todoApp/api/todos/:id', function (req:any,res){

  if (req.headerFound==="Found"){
    if(todoList.length!==0){
      var indexof = todoList.findIndex(obj => obj.id==req.params.id);
      if (indexof<0){
        res.send('Invalid Item');
        }
      else{
            todoList[indexof].completed=req.body.completed
            res.json(todoList);
        }
      }
      else{
        res.json(todoList);
      }
    }else{
      res.status(404)
      .json({"Headers":"Not found"})
    }
});


app.listen(81);
export default todoList
module.exports = app

//exports.todoList = todoList;
