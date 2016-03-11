contract seed {
  event SendTrig(address indexed _from, address indexed hash) 
  
  function set(address _hash){
     SendTrig(msg.sender, _hash); 
  }

}

