var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

// These get... the hide-y key function?
let env = require('dotenv');
env.config();

app.listen(port, function(req, res){
  console.log('listening on port', port);
});

let giphyRouter = require('./routers/giphy.router.js');
app.use('/giphy', giphyRouter);