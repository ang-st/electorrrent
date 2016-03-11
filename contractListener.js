var Web3 = require('web3')
var WebTorrent = require('webtorrent')

var seedContract = require('./seed_contract')
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
var coinbase = web3.eth.coinbase
var balance = web3.eth.getBalance(coinbase)

var blocklist = []

var contractAddr = process.argv[2]

var client = new WebTorrent()

var seed = seedContract.contract.at(contractAddr)
var filter = seed.SendTrig()
console.log('seedContract listener starting')
filter.watch(callbackSeed)

function callbackSeed (err, data) {
  if (blocklist.indexOf(data.blockNumber) == -1) {
    blocklist.push(data.blockNumber)
    client.add(data.args.hash.slice(2), onTorrent) // 0x !!
  }
}

function onTorrent (torrent) {
  console.log('Client is downloading:', torrent.infoHash)
  torrent.files.forEach(function (file) {
    console.log(file.name)
  })
}
