
var request = require('request')

module.exports = require('reconnect-core')(function (){
  var args = [].slice.call(arguments)
  return request.apply(null, args)
})

