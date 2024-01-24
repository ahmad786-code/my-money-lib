# My Money Format Library

A simple JavaScript library to format numeric values as currency.

## Installation

```bash
npm npm install izk-first-my-money-lib


 ## Usage

const {myMoneyLib} = require('izk-first-my-money-lib');

const price = 123456; // Replace with your numeric value
const moneySign = 'USD'; // Replace with your desired currency code

const formattedPrice = myMoneyLib(price, moneySign);
console.log(formattedPrice);
