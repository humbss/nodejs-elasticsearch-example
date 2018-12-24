var elasticsearch = require('elasticsearch');
var client = require('./connection.js'); 

client.cluster.health({}, function (err, resp, status) {
    console.log("-- Client Health --", resp);
});

var indexname = process.argv[2];
var ididx = process.argv[3]; 

client.index({
    index: indexname,
    id: ididx,
    type: 'detail',
    body: {
        "id": ididx,
        "order_date": "2018-12-25T00:01:00",
        "username": "Thiago Humberto",
        "value": 171.20
    }
}, function (err, resp, status) {
    console.log(resp);
});
