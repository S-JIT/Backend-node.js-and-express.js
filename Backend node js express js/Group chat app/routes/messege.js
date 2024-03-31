const express = require("express");
const fs = require("fs");

const router = express.Router();

router.post('/', (req, res, next) => {  //saving message sent by the corresponding user to a file
    console.log(req.body.username);

    if (req.body.message !== undefined) {  //writing to file only if user has entered a message
        fs.writeFile("username.txt", `${req.body.username}: ${req.body.message}`, { flag: 'a' }, (err) => {  //{ flag: 'a' } used to concatenate entered details to the existing data
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
    } else {                            //exception handling when message is empty
        res.redirect('/');
    }

});

router.get('/', (req, res, next) => {
    fs.readFile("username.txt", (err, data) => {    //check for existing messages
        if (err) {
            console.log(err);
            data = "No messages to display";
        }
        //sending a form to enter message and displaying it in response body
        res.send(`<html><body> 
                ${data}
                <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input id="message" type="text" name="message" placeholder="Enter message">
                <input type="hidden" name="username" id="username"><br>
                <button type="submit">Send</button></form>
            </body></html>`);
    });
});

module.exports = router;