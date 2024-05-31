// Firebase Libraries
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
var firebaseConfig = {
  apiKey: process.env["FIREBASE_API_KEY"],
  authDomain: process.env["FIREBASE_PROJECT_ID"] + ".firebaseapp.com",
  projectId: process.env["FIREBASE_PROJECT_ID"],
  storageBucket: process.env["FIREBASE_PROJECT_ID"] + ".appspot.com",
  messagingSenderId: process.env["FIREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["FIREBASE_APP_ID"],
  measurementId: process.env["FIREBASE_MEASUREMENT_ID"]
};
var firebaseapp = initializeApp(firebaseConfig);

// Libraries
import express from "express";
import axios from "axios";
import formidable from "formidable";
import fs from "node:fs";

// Allows usage of __dirname
import * as url from "url";
var __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Middleware
var app = express();
//app.use(cors());
app.use(express.json());

axios.defaults.headers.common['referer'] = 'https://studygiggle.onrender.com';

// Routes
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

app.get('/favicon/:type', function(req, res) {
  res.sendFile(__dirname + "/favicon/" + req.params.type);
});

app.get('/src/:file', function(req, res) {
  res.sendFile(__dirname + "/src/" + req.params.file);
});

app.get('/css/:file', function(req, res) {
  res.sendFile(__dirname + "/css/" + req.params.file);
});

app.get('/manifest', function(req, res) {
  res.sendFile(__dirname + "/site.webmanifest");
});

app.post('/upload', function(req, res, next) {
  const form = formidable({});

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.json(err);
    }

    try {
      const data = fs.readFileSync(files.file.filepath, 'utf8');
      res.json(fields);
      // res.json(data);

    } catch (err) {
      res.json(err);
    }

  });
});

app.post('/signIn', function(req, res) {
  let idToken = req.body.credential;
  let credential = GoogleAuthProvider.credential(idToken);
  let auth = getAuth(firebaseapp);

  signInWithCredential(auth, credential).catch((error) => {
    res.send(JSON.stringify(error));
  });

  res.send(auth);
});

app.use(function(req, res, next) {
  res.status(404).send("oof, we couldn't find that :/");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});
