var express = require('express');
var fs = require('fs');
var path = require('path');
var http = require('http');
const dotenv = require('dotenv');
const dbconn = require('./database/dbConn');

app = express();
dotenv.config();
var root = __dirname + "/public";
port = process.env.PORT || 3000;
// var http = require('http').Server(app);
var router = require('./routes/index');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors({origin: true}));
app.options('*', cors())

app.use(express.static(root));
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', router);


var httpsServer = http.createServer(app);
httpsServer.listen(port);
console.log('RESTful API server started on: ' + port);


