var Web3 = require('web3')
var WebTorrent = require('webtorrent')

var seedContract = require('./seed_contract')

var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
var coinbase = web3.eth.coinbase
var balance = web3.eth.getBalance(coinbase)

var contractAddr = process.argv[2]
var seed = seedContract.contract.at(contractAddr)

var client = new WebTorrent()
console.log('Hello')
client.seed('./test', function (torrent) {
  console.log('Client is seeding:', torrent.infoHash)
  seed.set('0x' + torrent.infoHash, {from: coinbase}) // !!

})

process.on('SIGINT', function () {
  console.log('Caught interrupt signal')
  if (i_should_exit)
    process.exit()
})
