const dotenv = require('dotenv');
var mongojs = require('mongojs');
var mysql      = require('mysql');
dotenv.config();
var db = mongojs('mongodb://127.0.0.1:27017/neuraps');

var collections = {
  employees: db.employees
}

module.exports.getMongoId = () => {
    var mongoObj= new mongojs.ObjectID()
	var mongoId=mongoObj.toHexString();
    return mongoId
}

// var connection = mysql.createConnection({
//   host     : 'localhost',
//    user     : 'root',
//   password : 'password',
//   database : 'test'
// });
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });

module.exports.collections = collections;
module.exports.db = db;
module.exports.mongojs = mongojs;
// module.exports.connection = connection;
