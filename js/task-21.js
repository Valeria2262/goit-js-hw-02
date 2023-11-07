/* Первая задача  (ДЗ - 2) 

Функция - совершить транзакцию (количество, цена PerDroid, кредиты клиента)

Insufficient funds! -  Недостаточно средств!

You ordered <quantity> droids worth <totalPrice> credits!" - Вы заказали <quantity> дроидов на сумму <totalPrice> кредитов!»

*/

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  
  const totalPrice = quantity * pricePerDroid;

  return totalPrice <= customerCredits ? `You ordered ${quantity} droids worth ${totalPrice} credits!` : "Insufficient funds!";
}


console.log(makeTransaction(5, 3000, 23000)); 
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));

console.log(makeTransaction(0, 7500, 0));
console.log(makeTransaction(1, 7500, 0));


/* Вторая задача  (ДЗ - 2) */

function formatMessage(message, maxLength) {
    
    const messlength = message.length;
    const mess = message.slice(0, maxLength);
    
    return messlength <= maxLength ? message : `${mess}...`
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

console.log(formatMessage("FFFF tttt wwqq pppp ttttt ooo eeeqqww yyyy ppppp", 3));



/* Третья задача  (ДЗ - 2) */

function checkForSpam(message) {

    const mess = message.toLowerCase();
    
    return mess.includes("spam") || mess.includes("sale");
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


/* Четвертая задача  (ДЗ - 2) */

function getShippingCost(country) {

    let price;
    
    switch (country) {
        
        case "China":
            price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        
        case "Chile":
            price = 250;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        
        case "Australia":
            price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        
        case "Jamaica":
            price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        
        default:
            return "Sorry, there is no delivery to your country";

    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

console.log(getShippingCost("Poland"));