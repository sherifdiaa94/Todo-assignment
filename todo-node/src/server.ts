import * as express from 'express';
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

//express.Request
function Middleware1(request, response, next) {
  if (request.path!=="/todoApp/api/health"){
  console.log(`${request.method} ${request.path}`);
  var fs = require('fs');
  // var jsonObj = JSON.parse(request);
  // console.log(jsonObj);
 
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
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
  
  fs.appendFileSync("Logfile.log","\n\nRequest: \n", 'utf8',function(err) {
    if (err) {
        console.log(err);
    }
  });

  fs.appendFileSync("Logfile.log",jsonRequest, 'utf8',function(err) {
    if (err) {
        console.log(err);
    }
  });
  

  let jsonResponse=JSON.stringify(response,getCircularReplacer());
  fs.appendFileSync("Logfile.log","\n\nResponse: \n", 'utf8',function(err) {
    if (err) {
        console.log(err);
    }
  });

  fs.appendFileSync("Logfile.log",jsonResponse, 'utf8',function(err) {
    if (err) {
        console.log(err);
    }
  });
  
  next();
  }else{
    next();
  }
}


app.use(Middleware1);


const healthstatus={
  status: "Node server is up and running on port 81"
}

app.get('/todoApp/api/health', function(req, res) {
  res.json(healthstatus);
  
});
 
app.get('/todoApp/api/todos', function(req, res) {
  res.json(todoList);
  //res.send(todoList);
  //Middleware1(req,res,next)
});

app.get('*', function(req, res){
  res.send('Invalid route');
});

app.post('/todoApp/api/todos', function (req,res){
  //console.log(req.body)
  todoList.push(req.body);
  //console.log("Item added")
  res.json(todoList);
});

app.delete('/todoApp/api/todos/:id', function (req,res){

  if(todoList.length!==0){
  var indexof = todoList.findIndex(obj => obj.id==req.params.id);
  if (indexof<0){
    res.send('Invalid Item');
    }
  else{
        console.log(todoList[indexof])
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
});



app.patch('/todoApp/api/todos/:id', function (req,res){
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
});

app.listen(81);

