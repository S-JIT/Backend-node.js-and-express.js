const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add-product',(req, res, next) =>{
    res.send('<html><body><form action="/product" method="POST"><input type="text" name="type"> <input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
});

app.post('/product', (req, res, next) =>{
    console.log(req.body);  //print the object as is is 
    const body = req.body;
    for(let key in body){   //printing the object properties separately
        console.log(key + ":" , body[key]);
   }

    res.redirect('/');
});

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello! from express JS</h1>');
});

app.listen(3000);