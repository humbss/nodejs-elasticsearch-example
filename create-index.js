var elasticsearch = require('elasticsearch');
var client = require('./connection.js'); 

client.cluster.health({}, function (err, resp, status) {
    console.log("-- Client Health --", resp);
});

var indexname = process.argv[2];

console.log('Creating index: '+indexname);

client.indices.create({
    index: indexname
}, function (err, resp, status) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("create", resp);
    }
});