var express = require('express');
var axios = require('axios') 

var app = express();

app.get('/', function (req, res) {
  res.send("Yay, my webserver's up!");
});

app.get('/contentAt/:id', function (req, res) {
  let url = `https://www.googleapis.com/drive/v3/files/${req.params.id}?&key=${process.env['API_KEY']}&alt=media`;
  axios.get(url) 
    .then(dat => res.send(dat.data)) 
    .catch(err => res.send(err))
});

app.use(function(req, res, next) {
  res.status(404).send("oof, we couldn't find that :/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});
