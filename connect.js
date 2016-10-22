var connect = require('camo').connect

var database
var uri = 'mongodb://localhost/test'  
connect(uri).then(function(db) {
  database = db
})