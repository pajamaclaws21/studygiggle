import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

var app = express();
app.use(cors());

app.get('/', function (req, res) {
  res.send("Yay, my webserver's up!");
});

app.get('/contentAt/:id', function (req, res) {
  let url = `https://www.googleapis.com/drive/v3/files/${req.params.id}?&key=${process.env['API_KEY']}&alt=media`;
  fetch(url, {referrer: "https://studygiggle.onrender.com/"})
    .then(data => data.text())
    .then(text => res.send(text));
});

app.use(function(req, res, next) {
  res.status(404).send("oof, we couldn't find that :/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});
