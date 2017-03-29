//Homework 2.2


var myObject = db.products.findOne({_id: ObjectId("507d95d5719dbef170f15c00")})

myObject.term_years = 3

db.products.save(myObject)

myObject.limits.sms.over_rate=0.01

db.products.save(myObject)

//Homework 2.3


db.products.find({"limits.voice": {$exists: true}}).count()
