## Folder structure
- `/contracts`: stores contracts
- `clients`: stores clients interacting with contracts
- `migrations`: stores scripts used to deploy contracts to eth blockchain

## Applications
1. SimpleStorage: Store a value on blockchain
2. PetAdoption: Adopt pet
3. SimpleCoin: create a coin
4. SimpleBank: create a central bank

## Deploy Contracts and test locally

1. Install and start [Ganache](https://truffleframework.com/ganache) (local, personal Ethereum blockchain)
1. Compile contracts
    ```bash
    npm run compile
    ```
1. Migrate contracts to local block chain
    ```bash
    npm run migrate
    ```
1. Interact with contracts
    ```bash
    npm run -- exec clients/01.js
    npm run -- exec clients/02.js
    ...
    ```

## Readings
- Web compiler `remix`: https://remix.ethereum.org/#version=builtin&optimize=false
- Official solidity doc: http://solidity.readthedocs.io/en/v0.4.24/introduction-to-smart-contracts.html
- Learn X in Y minutes solidity: https://learnxinyminutes.com/docs/solidity/
- web3 api: https://github.com/ethereum/wiki/wiki/JavaScript-API
- Awesome eth: https://github.com/btomashvili/awesome-ethereum
- About security: https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md
- Other p2p solutions: https://github.com/kgryte/awesome-peer-to-peer
- solidity-baby-steps(might be a little outdated): https://github.com/fivedogit/solidity-baby-steps

## Ideas
### Make writing dapp as easy as possible
better than truffle
1. Write contract
2. Compile and deploy
3. Interact with contract

Is migrations script necessary?

compiler: http://solidity.readthedocs.io/en/v0.4.24/installing-solidity.html#solcjs
