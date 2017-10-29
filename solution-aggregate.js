var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var size = process.argv[2];

mongo.connect(url, function(err, db) {
  var prices = db.collection('prices');
  prices.aggregate([
    { $match: { size: size}},
    { $group: {
      _id: 'avg',
      avg: {
        $avg: '$price'
      }
    }}
    ]).toArray(function(err, res) {
      if (err) throw err;
      console.log(Number(res[0].avg).toFixed(2));
    });
    db.close();
});
