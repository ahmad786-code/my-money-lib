const myMoneyLib = (price, moneySign) => {
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: `${moneySign}`
    }).format((price / 100).toFixed(2));
  
    return formattedPrice;
  }
  
   
    module.exports = {
        myMoneyLib
    }  