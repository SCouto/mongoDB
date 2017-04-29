//homework 6.1
mongod 
mongo --shell localhost/week6 week6.js

homework.init()


mongod --shardsvr …
mongod --configsvr
mongos --configdb your_host_name:27019
mongo --shell localhost/week6 week6.js


sh.addShard("localhost:27018")

homework.a() -> 1000001

//homework 6.2
sh.enableSharding("week6")

db.trades.createIndex( { ticker : 1, time : 1 } )

sh.shardCollection("week6.trades", {ticker:1, time:1})

homework.b() -> 3

//homework 6.3
mongod --shardsvr --port 27020 --dbpath anotherpath

sh.addShard("localhost:27020")


homework.c() -> 2

