> Explore the possible usages of dapps

## Usage


1. Install and start [Ganache (local, personal Ethereum blockchain)](https://truffleframework.com/ganache)
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

## Things TODO:
### Make writing dapp as easy as possible
better than truffle
1. Write contract
2. Compile and deploy
3. Interact with contract

Is migrations script necessary?

compiler: http://solidity.readthedocs.io/en/v0.4.24/installing-solidity.html#solcjs

## Readings
- Web compiler `remix`: https://remix.ethereum.org/#version=builtin&optimize=false
- Official solidity doc: http://solidity.readthedocs.io/en/v0.4.24/introduction-to-smart-contracts.html
- Learn X in Y minutes solidity: https://learnxinyminutes.com/docs/solidity/
- web3 api: https://github.com/ethereum/wiki/wiki/JavaScript-API
- Awesome eth: https://github.com/btomashvili/awesome-ethereum
- About security: https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md
- Other p2p solutions: https://github.com/kgryte/awesome-peer-to-peer
- solidity-baby-steps(might be a little outdated): https://github.com/fivedogit/solidity-baby-steps