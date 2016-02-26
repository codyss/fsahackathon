var express = require('express');
var app = express();
var path = require('path');
var server = app.listen(process.env.PORT || 8000);

console.log("Magic happening on port 8000")

app.use(express.static(path.join(__dirname, 'app')));
// app.use(express.static(path.join(__dirname, 'browser')));
// app.use(express.static(path.join(__dirname, 'node_modules')));


// var session = require('express-session');

// app.use(session({
//     // this mandatory configuration ensures that session IDs are not predictable
//     secret: 'hunting'
// }));

// app.use(function (req, res, next) {
//     console.log('session', req.session);
//     next();
// });

// app.use('/', routes);

app.use('/', function(req, res, next ){
  res.sendFile(path.join(__dirname, 'app/index.html'));
});