
homework 3.1
db.sensor_readings.ensureIndex({active: 1, tstamp: 1})


homework 3.2
db.currentOp()
db.killOp(id)



homework 3.3 

db.products.ensureIndex({for: 1}
                                                                                                                                   
db.products.find({for: "ac3"})
db.products.find({for: "ac3"}).count()

db.products.find({for: "ac3"}).explain("executionStats")
~                     
