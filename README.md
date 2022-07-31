# HardBank -- manifesting on-chain commerce. 

This is Version 0.1 of HardBank, built thanks to open-source resources provided by the following:

The Stripes NFT: https://github.com/The-Stripes-NFT/

Techomoro: https://github.com/techomoro/ReactMultiPageWebsite

Airdrop Tutorial: [link]

Thanks a ton, for real. I will list other resources that were helpful as I remember them.

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

Taken as a whole, these functionalities provide the capacity to illuminate not only the relationship between the purchaser and the merchant, but also that of the product operator and the product owners. 

Some additional thoughts:
Since there is no maximum limit to how many units of a given product can be sold, there is no maximum cap to the number of NFTs which can be minted from these addresses -- unless the product in question is meant to be a limited edition product.


## Available Scripts

We assume that React is already installed on your device, and suggest using Virtual Studio Code.

Per normative standards, the following commands will launch the app in your localhost:3000

### `npm install`
### `npm start`

Additionally, chokidar may be needed to be specifically installed.

At the current duration, the app is meant to be operate on the Rinkeby testnet.

There are three contracts that interact with the front-end:





Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
