var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client({
    hosts: [
        'https://elastic:PUT_YOUR_PASSWORD_HERE@YOUR_ES_INSTANCE_ID-west1.gcp.cloud.es.io:9243'
    ]
});

module.exports = client;  