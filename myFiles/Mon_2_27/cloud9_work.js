

var express = require('express')
var path = require('path');
var app = express()

// https://scheduler-mgwhitfield.c9users.io/schedule/123
// https://localhost:3000/schedule/123
app.get('/schedules/:id', function(req, res) {
   res.send(req.params.id);
});

// https://scheduler-mgwhitfield.c9users.io/index.html
app.use(express.static(path.join(__dirname, 'www')));

// listens for connections on localhost 3000 which is a server port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})




/*var express = require('express')
var app = express()

//https
// https://scheduler-mgwhitfield.c9users.io/?param=1&param2=2
app.all('*', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
*/

/*
var express = require('express')
var path = require('path');
var app = express()

// https://scheduler-mgwhitfield.c9users.io/schedule/123
app.get('/schedules/:id', function(req, res) {
   res.send(req.params.id);
});

// https://scheduler-mgwhitfield.c9users.io/index.html
app.use(express.static(path.join(__dirname, 'www')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})*/