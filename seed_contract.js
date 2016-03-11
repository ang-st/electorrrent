var Web3 = require('web3')
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

module.exports.contract = web3.eth.contract([{'constant': false,'inputs': [{'name': '_hash','type': 'address'}],'name': 'set','outputs': [],'type': 'function'}, {'anonymous': false,'inputs': [{'indexed': true,'name': '_from','type': 'address'}, {'indexed': true,'name': 'hash','type': 'address'}],'name': 'SendTrig','type': 'event'}])

module.exports.bin = '606060405260ae8060106000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480632801617e146037576035565b005b604b6004808035906020019091905050604d565b005b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc7f52a3cc30c5a04b1a342661d524bdc3de5ac49ba4fd0fc4e5e6bb9806d4b4260405180905060405180910390a35b5056'
