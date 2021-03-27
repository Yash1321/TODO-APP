var express = require('express');
var todoController = require('./controller/todoController');
var app = express();

// set up template engines
app.set('view engine','ejs');

app.use(express.static('./public'));

//fire controllers
todoController(app);
//listen to port
app.listen(3000);
console.log('You Are Listening To port 3000');