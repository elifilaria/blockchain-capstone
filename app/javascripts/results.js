console.log("THIS IS FROM RESULTS.js");




    function populateCandidateVotes() {
      // confirm dialog


      let candidateNames = Object.keys(candidates);
      for (var i = 0; i < candidateNames.length; i++) {
        let name = candidateNames[i];
        Voting.deployed().then(function(contractInstance) {
          contractInstance.totalVotesFor.call(name).then(function(v) {
            $("#" + candidates[name]).html(v.toString());
            //user_address=contractInstance.address;
          });
        });
      }


    }





    $( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  Voting.setProvider(web3.currentProvider);
  
  populateCandidateVotes();

});