import React from "react";



function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
            <h1 class="font-weight-light">HardBank</h1>
            <br></br>
            <p>
              <i>This is Version 0.1 of our attempt to manifest <b>full-chain</b> commerce for physical products.</i>
              <br></br>
              <br></br>
              A <b>full-chain</b> transaction is transaction where both sides of the transaction -- the product being purchased and the cryptocurrency that is used to purchase the product -- are represented on-chain.
              <br></br>
              We execute full-chain transactions for physical products by injectively assigning NFT smart contract addresses to products as barcodes are assigned and used in commerce today.
              <br></br>
              <br></br>
              <i>Transactions through our protocol works as follows:</i>
              <br></br>
              &nbsp;&nbsp;&nbsp;1. &nbsp;A purchase of a product is represented by a mint from the product's NFT smart contract address.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;2. &nbsp;For each purchase, the purchaser passively collects loyalty points in the form of ERC-20 tokens when they claim the purchase.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;3. &nbsp;Product owners can see how much product has been sold and can also claim their share of the proceeds in real-time.
              <br></br>
              <br></br>
              We have built a demo of our protocol from which Branches can be purchased by minting from a BranchNFT smart contract.
              <br></br>
              This demo functions on the Rinkeby Testnet, with the following executionable actions that can be accessed from the Header:
              <br></br>
              <b>"Buy"</b> -- Branches can be purchased by minting a BranchNFT for 0.01 ETH.
              <br></br>
              <br></br>
              <b>"Claim"</b> -- Branches can be claimed for physical delivery to a location of their choice. When claiming the Branch, the Purcahser will also receive $TREE loyalty tokens. Each BranchNFT can only be used for one claim but remains in the wallet of the Purchaser as a receipt of their purchase.
              <br></br>
              <br></br>
              <b>"Owner"</b> -- Product owners (defined as those who own a TrunkNFT) can view the balance of total purchases and can claim their share of the proceeds.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>    
            </p>
          </div>
        </div>
      </div>
    </div>
    

  );
}

export default Home;
