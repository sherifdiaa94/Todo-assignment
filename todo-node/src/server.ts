import * as express from 'express';
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.text({ type: 'text/plain' }));

let todoList=[
  {id:0,
    item:"First todo item"},
    {id:1,
    item:"Second todo item"},
    {id:2,
    item:"Third todo item"}
];

app.get('/todoApp/api/health', function(req, res) {
  res.send('Testing API');
  
});
 
app.get('/todoApp/api/todos', function(req, res) {
  res.json(todoList);
});

app.get('*', function(req, res){
  res.send('Invalid route');
});

app.post('/todoApp/api/todos', function (req,res){
  console.log(req.body)
  todoList.push(req.body);
  console.log("Item added")
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

app.listen(81);

