# nodejs-elasticsearch-example
Using Elasticsearch client over Nodejs

This is a proof of concept of a simple node client for Elasticsearch servers.

```npm install```

Open connection.js, configure your Elasticsearch credentials.

To create an index:

```node create-topic.js customers```

To delete an index:

```node delete-index.js customers```

To insert into index:

``` node main.js customers 1 ```

args: index name and document id

