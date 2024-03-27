const express = require("express");

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><body><form action="/admin/add-product" method="POST"><input type="text" name="type"> <input type="number" name="size"><button type="submit">Add Product</button></form></body></html>');
});

router.post('/add-product', (req, res, next) => {
    //console.log(req.body);  //print the object as it is 
    const body = req.body;
    for (let key in body) {   //printing the object properties separately
        console.log(key + ":", body[key]);
    }

    res.redirect('/');
});

module.exports = router;