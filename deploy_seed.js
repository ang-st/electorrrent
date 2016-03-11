var Web3 = require('web3');

var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase);

var seedContract = require("./seed_contract")
var blocklist =[]



var seed = seedContract.contract.new(
   {
     from: web3.eth.accounts[0], 
     data: seedContract.bin,
     gas: 3000000
   }, function(e, contract){
    //console.log(e, contract);
    if (typeof contract.address != 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
          


    }
 })


