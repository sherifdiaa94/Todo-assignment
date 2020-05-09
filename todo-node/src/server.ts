import * as express from 'express';
var bodyParser = require('body-parser')

const app = express();
//const bodyparser=bodyParser(); 

app.get('/todoApp/api/health', function(req, res) {
  res.send('Testing API');
  
});
 

app.listen(81);

