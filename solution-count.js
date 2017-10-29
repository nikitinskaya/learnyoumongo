var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var req_age = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('parrots');
  collection.count(
    { age: { $gt: req_age}}, function(err, count) {
      console.log(count);
    }); 
  db.close();
});
