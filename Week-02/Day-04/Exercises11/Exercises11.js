'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
function showNameAndBalance(account){
    console.log("Name: " + account.client_name + "   Balance: " + account.balance);
}

function transferBalance(fromAccNum, toAccNum, balance){
    var fromLoc = -1;
    var toLoc = -1;
    accounts.forEach(function(value, index){
        if(value.account_number === fromAccNum){
            fromLoc = index;
        }else if(value.account_number === toAccNum){
            toLoc = index;
        }
    });
    accounts[fromLoc].balance -= balance;
    accounts[toLoc].balance += balance;
}

accounts.forEach(showNameAndBalance);
transferBalance(23456311, 11234543, 100);
accounts.forEach(showNameAndBalance);
transferBalance(23456311, 11234543, 100);
accounts.forEach(showNameAndBalance);
