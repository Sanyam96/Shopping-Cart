var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + "/public_static"));

const cartRoute = require('./routes/api');
app.use('/api/addToCart', cartRoute);

 
 app.listen(9999, function () {
     console.log("Server started on http://localhost:9999");
});