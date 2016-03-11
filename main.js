var tracker = require('./tracker')
var spawn = require('electron-spawn')

var addr = process.argv[2]

var contractListener = spawn('contractListener.js', addr, {
  detached: true
})

contractListener.stdout.on('data', function (data) {
  console.log(data.toString())
})

// Dont work ..
process.on('SIGINT', function () {
  console.log('Caught interrupt signal')
  process.exit()
})
