var express = require('express');
var axios = require('axios') 
var cors = require('cors');

var app = express();
app.use(cors());
app.use(express.json());

axios.defaults.headers.common['referer'] = 'https://studygiggle.onrender.com';

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/squiggle.html');
});

app.get('/contentAt/:id', function (req, res) {
  let url = `https://www.googleapis.com/drive/v3/files/${req.params.id}?&key=${process.env['API_KEY']}&alt=media`;
  //fetch(url, {referrer: "https://studygiggle.onrender.com/"})
  axios.get(url)
    .then(newRes => newRes.data)
    .then(text => res.send(text))
    .catch(err => res.send(`what?? an error?? here it is: ${err}`));
});

app.post('/upload', function(req, res) {
  res.send(req.body);
});

app.use(function(req, res, next) {
  res.status(404).send("oof, we couldn't find that :/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});
