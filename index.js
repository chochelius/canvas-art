// create express server on port 5000   
const express = require('express');
const app = express();
const port = 5000;
var helmet = require('helmet');
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set nosniff header to allow cross-site scripting
app.use(function(req, res, next) {
    res.header("X-Frame-Options", "DENY");
    res.header("X-XSS-Protection", "1; mode=block");
    res.header("X-Content-Type-Options", "nosniff");
    next();
});

app.use('/', express.static(__dirname + '/'))

//display index.html on the root route
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

