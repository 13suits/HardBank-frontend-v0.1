import React from "react";



function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
            <h1 class="font-weight-light">Hello,</h1>
            <br></br>
            <p>
              <i>This is a Demo of our attempt to do the following:</i>
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;1. &nbsp;Allow transactions for physical products to be executed on-chain with the use of NFTs as representations for each purchase.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;2. &nbsp;Allow consumers to passively collect loyalty points in the form of ERC-20 tokens every time they claim a purchase.
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;3. &nbsp;Allow investors to see how much product has been sold and also enable them to claim their share of the proceeds, all in real-time.
              <br></br>
              <br></br>

              <i>This Demo functions on the Rinkeby Testnet, with the following executionable actions that can be accessed from the Header:</i>
              <br></br>
              <br></br>
              <b>"Buy"</b> -- Consumers can purchase the product by minting a BranchNFT for 0.01 ETH.
              <br></br>
              <br></br>
              <b>"Claim"</b> -- Consumers can use their BranchNFT to claim their purchase for physical delivery to a location of their choice. By doing so, they will also receive $TREE loyalty tokens. Each BranchNFT can only be used for one claim but remains in the wallet of the Consumer as a receipt of their purchase.
              <br></br>
              <br></br>
              <b>"Owner"</b> -- Investors are those who own a TrunkNFT and can view the balance of total purchases, which is held in the BranchNFT address. They can claim their share of the proceeds from this address.
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
