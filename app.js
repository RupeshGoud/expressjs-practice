var express = require('express');
var app = express();
app.listen(3000);
//Here im using a light weight template engine ejs
app.set('view engine','ejs');

app.use('/assets',express.static('stuffs')); // this is for static file rendering

//app.get(), app.post(), app.put(), app.delete()
app.get('/',(req,res)=>{
	//res.sendFile(__dirname+'/index.html'); // rendering static html page
	res.render('index');
});

app.get('/contact',(req,res)=>{
	// if we write anything in between req and res , that logic considered as middleware
	res.render('contact');
});

//Dynamic routing , Route params
// here we can access :id/:name param with req.params.id/name
app.get('/profile/:id',(req,res)=>{
	var dummy_data = {age:21,job:'Dev',hobbies : ['programming','ai','dapps','cricket','football']};
	//res.send(`Welcome to the profile of ${req.params.id}`);
	// .render will automatically look for the file inside views
	res.render('profile.ejs',{name:req.params.id,data:dummy_data})
});
