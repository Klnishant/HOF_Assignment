const storeItemsUSD = {
    item1: 20,   // Price in USD
    item2: 35,
    item3: 10,
  };

exchange_rate=80;

function convertToINR(priceUSD){
    let PriceINR=priceUSD*80;
    return PriceINR;
}
const itemsAndPricesInINR = Object.entries(storeItemsUSD).map(([item, priceUSD]) => ({
    [item]: convertToINR(priceUSD)
  }));

const convertedPrice=Object.assign({},...itemsAndPricesInINR);
console.log(convertedPrice);

