var bodyParser = require('body-parser');

var data = [{item:'Bring Milk'},{item:'walk dog'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo',function(req,res){
    res.render('todo',{todo:data});
});

app.post('/todo',urlencodedParser,function(req,res){
    data.push(req.body);
    res.render('todo',{todo:data});
});

app.delete('/todo/:item',function(req,res){
    //console.log(req.params.item);
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, "-") !== req.params.item;
    });
  //  console.log(data);
    res.json(data);
});
}