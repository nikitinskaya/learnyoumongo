var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var url = "mongodb://localhost:27017/" + dbName;
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection(collectionName);
  collection.remove({
    _id: id
  });
  db.close();
});
