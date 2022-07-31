# HardBank -- manifesting on-chain commerce. 

This is Version 0.1 of HardBank, built thanks to open-source resources provided by the following:

The Stripes NFT: https://github.com/The-Stripes-NFT/

Techomoro: https://github.com/techomoro/ReactMultiPageWebsite

m1guelpf: https://github.com/m1guelpf/nft-token-drop

OpenZeppelin: https://github.com/OpenZeppelin/openzeppelin-contracts

HashLips: https://github.com/HashLips/solidity_smart_contracts

I will list other resources that were helpful as I remember them. Thanks a ton, for real.

## Available Scripts

We assume that React is already installed on your device, and suggest using Virtual Studio Code.

Per normative standards, the following commands will launch the app in your localhost:3000

### `npm install`
### `npm start`

Additionally, chokidar may be needed to be specifically installed.

### `npm install chokidar`

As this is still a work in progress, the app is currently meant to be operate on the Rinkeby testnet.

There are three smart contracts that interact with the front-end:
 - BranchNFT.sol -- this smart contract acts as the barcode for the product and is executable by anyone.
 - $NFT.sol -- this smart contract is for the rewards token of the product and is also engaged in the claim function of the purchasing journey.
 - Payments.sol -- this smart contract is the payment splitter, designating how much each owner is due to receive and is executable only by the owners.

Additionally, there is one smart contract that will be integrated soon:
 - TrunkNFT.sol -- this smart contract mints owners of the product -- i.e. an owner is defined as someone who holds an NFT minted from this contract.

## Purpose

The purpose of HardBank is to build out the protocol which will allow transactions for physical products to be completely represented and executed on the blockchain. This means that both the cryptocurrency that is used to purchase the product, as well as the product itself (more specifically -- a representation of the product) will be recorded on the blockchain.

We define such transactions to be <b>fully on-chain</b> or <b>full-chain</b>.

Purchasing an NFT for ETH is an example of a full-chain transaction: when the two assets are exchanged, both sides of the transaction (the NFT to buyer and the ETH to seller) are recorded on the blockchain -- the entire transaction is represented, in full, on the blockchain.

Currently, there are many providers which allow crypocurrency to be used to purchase physical products. In these cases, the transfer of the cryptocurrency from the purchaser to the merchant (or payments provider) is recorded on the blockchain; however, there is no information on the blockchain regarding the product that was purchased.

We define these transactions where only half of the information is recorded on the blockchain to be <b>half-chain</b> transactions. Such transactions do not provide any information as to why the cryptocurrency was transferred from one account to another.

Half-chain transactions make no use of any of the functionalities offered by blockchain technology and have questionable value-add beyond treating cryptocurrency as a currency.

Moving transactions for physical products from half-chain to full-chain will allow for the functionalities of blockchain technology to be actualized, and will consequently provide meaningful benefits to merchants, consumers, investors, and the market as a whole.

These benefits are valuable enough to eventually push a tremendous amount of transactions for physical products to be executed on-chain.

## How it Works

Beyond acting as a medium for art or as assets in video games, NFTs have tremendous functionality as unique single-form entries on the blockchain.

We utilize this functionality to injectively represent any given product with a unique NFT smart contract address. These 1-to-1 pairings are meant to mirror how barcodes are used to represent products in commerce today.

To purchase a given product, the purchaser first mints an NFT from its smart contract. Both sides of this transaction are recorded on the blockchain — (i) the cryptocurrency used to mint (or pay for) the NFT (or product), and (ii) the NFT (or representation of the product) transferred to the purchaser in exchange for the payment.

Upon completing the on-chain transaction, the purchaser will then want to claim the physical product by providing the merchant with a physical address to receive the product. In order to ensure that a single instance of an NFT can only be used to claim one unit of a given product, the claiming process must alter the state of the NFT used to claim the product. To represent this on the blockchain, our claim function mimics a token airdrop exclusive to NFT holders, which tracks the status of whether or not an NFT has already been used to claim tokens from an airdrop.

Like an airdrop, our claim function also provides an opportunity for merchants to reward its customers with reward tokens, sent to the purchaser at time of claim. The precise functionality of the reward token can be determined by the merchant, and having this option is a great way to encourage repeat purchases, word-of-mouth marketing, and building a community for a product.

On the otherside of the transaction, the payments are stored in the NFT's smart contract. These proceeds can be divvied up as the product owner (or owners) choose to inscribe on the smart contract. The implications of this transparency and functionality are easy to imagine, and are consequential to fundraising, investing, compensation, payment cycles, and other aspects of 'real' business.

Taken as a whole, these functionalities provide the capacity to illuminate not only the relationship between the purchaser and the merchant, but also that of the product operator and the product owner. The resulting value-adds will spur more efficient allocation of capital and help better products to be developed, providing a net positive for the market (and species-being) as a whole.

<i>Some additional thoughts</i>

Since there is no maximum limit to how many units of a given product can be sold, there is no maximum cap to the number of NFTs which can be minted from these addresses -- unless the product in question is meant to be a limited edition product.

NTT smart contracts could be used instead of NFT smart contracts. The vast majority of physical products that are sold are not meant to be resold, and utilizing NFTs could prevent adoption given the current speculative connotations associated with NFTs.

In our app, we have utilized a Payment Splitter which allows Product Owners to view and claim their share of the proceeds in real time. We believe the best ownership/governance model should have Product Ownership be represented by the ownership of a seperate NFT. In addition to providing the opportunity for speculation, this enables Product Owners to act, make decisions, and oversee Product Operations like a Board of Directors.

We find this to be better than operating governance solely on governance tokens, which tends to be disorganized and therefore fails at producing the accountability essential to operating a healthy business.

## Shortcomings and things that need to be built

At the theoretical level, the largest shortcoming comes with providing the physical address to receive the product. This constitutes an insta-dox, as a given wallet address can now be linked to a given physical address.

There are also issues regarding disputes -- for example, what happens in the event that the purchaser says the physical product has not yet arrived, but the merchant says the product was already sent two weeks ago? There are many examples of disputes; and payment processors act as third-parties to resolve said disputes, even going so far as to go into their own pockets to refund transactions.

Under the HardBank protocol, the purchaser and the merchant interact directly, and there is no third-party to hold the merchant accountable once the payment has been made. It is possible to set up a third party which handles logistics; effectively verfiying stock, checking on orders, and executing delivery. It would be capitally intensive to build this third party, and this prcoess could also be expensive for certain merchants who may not have the funds to create the initial set amount of invetory.

There is also the obvious issue of adoption. While many merchants tout that they are ready to accept cryptocurrency as payments, and many providers have been set up to execute these payments, it is clear that the volume of half-chain transactions is extremely small. Is there any actual demand, at this time, to use cryptocurrency to purchase physical products?

On the coding side, there is definitely some clunkiness, and we would like to add (or experiment with) certain features, including:
 - checking if an NFT has already been used to claim an order
 - creating a burn functionality to the NFT upon claiming an order
 - saving the inputted physical address in a way that is not linked to the wallet address that is used to execut the claim
 - tokengating entry to the "Owner" section
 - conducting a check in real time for NFT ownership status in order to ensure that only NFT holders can access the Payable smart contract
 - positioning of the login button in the navigation bar
 - etc etc

