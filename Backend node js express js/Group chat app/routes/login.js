const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get('/login', (req, res, next) => {   //sending a form when user hits '/login' url and saving the username into local storage
    res.send(`<html><body>
                <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/" method="POST"> 
                <input id="username" type="text" name="username" placeholder="Enter username">
                <button type="submit">Login</button></form>
            </body></html>`);
});

module.exports = router;