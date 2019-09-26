// import modules
var mongoose = require('mongoose');

// model setting
// Counter Schema
var counterSchema = mongoose.Schema({
  name: {type:String, required:true},
  totalCount: {type:Number, required:true},
  todayCount: {type:Number},
  date:{type:String}
});

var Counter = mongoose.model('counter', counterSchema);

module.exports = Counter;
