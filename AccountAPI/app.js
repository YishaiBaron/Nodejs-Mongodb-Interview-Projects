var express=require("express"); 
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
let uri = 'mongodb://localhost:27017/gfg'; 
mongoose.connect(uri, { useNewUrlParser: true })
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 





var app=express() 



app.use(bodyParser.json()); 
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/sign_up', function(req,res){ 

	var name = req.body.name; 
	var email =req.body.email; 
	var age =req.body.age; 

	var data = { 
		"name": name, 
		"email":email, 
		"age":age 
    } 
   
    db.collection("details").findOne({email: email}, function(err, result) {

     if(result)
     { 
		console.log("error: "+result.email +" email exists");
		res.status(400).send({"error": "email already exists"});
      //  return res.redirect('email_exists.html'); 
    }
else 
{
    db.collection('details').insertOne(data,function(err, collection){ 
        if (err) throw err; 
  
		console.log("Record inserted Successfully"); 
        return res.redirect('signup_success.html'); 

	}); 
}
    
});

 

		
})


app.get('/',function(req,res){ 
res.set({ 
	'Access-control-Allow-Origin': '*'
	}); 
return res.redirect('index.html'); 
}).listen(3000) 


console.log("server listening at port 3000"); 
