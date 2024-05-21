// // SPDX-License-Identifier: MIT
// // Specifies the license under which the contract is released. In this case, it's MIT License.
// pragma solidity ^0.8.24;
// // Indicates the compiler version required to compile this contract. It must be compatible with Solidity version 0.8.24 or newer.

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// // Imports the interface for ERC20 tokens from OpenZeppelin contracts library. This allows interaction with any ERC20 token.
// import "@openzeppelin/contracts/access/Ownable.sol";
// // Imports the Ownable contract from OpenZeppelin, providing basic authorization control functions.


// contract MultiSend is Ownable {
//     // Declares the MultiSend contract, inheriting from Ownable and.
    
//     event TransactionProcessed(address indexed recipient, uint256 amount, bool isEther);
//     // Defines an event that gets emitted whenever a transaction is processed. It includes details about the recipient, amount transferred, and whether it's Ether or a token transfer.
    
//     struct Transaction {
//         address recipient;
//         uint256 amount;
//         bool isEther;
//     }
//     // Defines a custom struct named Transaction to hold information about each transaction, including the recipient address, the amount to be transferred, and a boolean indicating whether it's Ether or a token transfer.
    
//     mapping(address => uint256) public balances;
//     // A public mapping that tracks the balance of each address interacting with the contract. The key is the address, and the value is the balance.
    
//     address private privateOwner ;
//     // Declares a private variable to store the address of the contract's owner. This is used for authorization purposes.
    
//     constructor()  Ownable(msg.sender){
//         // Constructor function that sets the initial state of the contract. In this case, it assigns the contract deployment address as the owner.
//         privateOwner  = msg.sender;
//     }
    
//     function deposit(uint256 amount) external payable onlyOwner {
//         // External function that allows the owner to deposit Ether into the contract. It requires the caller to be the owner and ensures the sent value matches the specified amount.
//         require(msg.value == amount, "Deposit amount does not match sent value");
//         // Checks that the sent value equals the specified amount. If not, it reverts the transaction with an error message.
//         balances[privateOwner] += amount;
//         // Updates the owner's balance in the contract by adding the deposited amount.
//     }
    
//     function withdraw(uint256 amount) external onlyOwner {
//         // External function that allows the owner to withdraw Ether from the contract. It prevents reentrancy attacks and requires the caller to be the owner.
//         require(balances[privateOwner ] >= amount, "Insufficient balance");
//         // Checks that the owner's balance is sufficient to cover the withdrawal amount. If not, it reverts the transaction with an error message.
//         balances[privateOwner ] -= amount;
//         // Deducts the withdrawn amount from the owner's balance.
//         payable(privateOwner).transfer(amount);
//         // Transfers the withdrawn amount to the owner's address.
//     }
    
//     function processTransactions(Transaction[] calldata transactions) external onlyOwner {
//         // External function that processes an array of transactions. It requires the caller to be the owner.
//         for (uint256 i = 0; i < transactions.length; i++) {
//             Transaction memory tx = transactions[i];
//             // Iterates over each transaction in the array. Each transaction is stored locally for efficient access.
            
//             if (tx.isEther) {
//                 // Checks if the transaction involves transferring Ether.
//                 require(balances[privateOwner ] >= tx.amount, "Insufficient balance");
//                 // Ensures the owner's balance is sufficient to cover the Ether transfer. If not, it reverts the transaction with an error message.
//                 balances[privateOwner ] -= tx.amount;
//                 // Deducts the Ether transfer amount from the owner's balance.
//                 payable(tx.recipient).transfer(tx.amount);
//                 // Transfers the Ether to the recipient's address.
//             } else {
//                 // If the transaction is not Ether but a token transfer.
//                 IERC20 token = IERC20(tx.recipient);
//                 // Casts the recipient address to an ERC20 token instance for token transfers.
//                 require(token.balanceOf(address(this)) >= tx.amount, "Insufficient token balance");
//                 // Checks that the contract holds enough tokens to cover the transfer. If not, it reverts the transaction with an error message.
//                 token.transfer(tx.recipient, tx.amount);
//                 // Transfers the specified amount of tokens to the recipient's address.
//             }
            
//             emit TransactionProcessed(tx.recipient, tx.amount, tx.isEther);
//             // Emits the TransactionProcessed event with details of the transaction.
//         }
//     }
// }