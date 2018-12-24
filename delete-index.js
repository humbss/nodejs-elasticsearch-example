var elasticsearch = require('elasticsearch');
var client = require('./connection.js'); 

client.cluster.health({}, function (err, resp, status) {
    console.log("-- Client Health --", resp);
});

var indexname = process.argv[2];

console.log('Deleting index:'+indexname);

client.indices.delete({ index: indexname }, function (err, resp, status) {
    console.log("delete", resp);
});
