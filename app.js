var express = require("express"),
	app = express(),
	hbs = require("hbs"),
	handlebars = require("handlebars");


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);



app.get('/', function(req, res){
	res.render('index', {name : "Ela"});
});



app.listen(3000);
console.log("Server started on port 3000");