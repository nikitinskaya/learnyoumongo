var mongo = require('mongodb').MongoClient
var req_age = parseInt(process.argv[2]);
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var new_parrots = db.collection('parrots').find({
    age: { $gt: req_age }
    }, {
      name: 1, 
      age: 1,
      _id: 0
    }).toArray(function(err, documents) {
      console.log(documents);    
  });
  db.close();
});
