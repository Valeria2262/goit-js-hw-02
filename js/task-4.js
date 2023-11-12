

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


/* ==================================================== */
/* trener */

function getLastElementMeta(array) {
  const lastInd = array.length - 1;
  const lastElem = array[lastInd];
  return [lastInd, lastElem];
}

console.log(getLastElementMeta(["apple", "peach"])); //` повертає `[1, "peach"]`
console.log(getLastElementMeta(["apple"])); // повертає `[0, "apple"]`
console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає `[3, "banana"]`
console.log(getLastElementMeta(["apple", "peach", "pear"])); // повертає `[2, "pear"]`


/* ================================================ */

function getExtremeElements(array) {
  const lastInd = array.length - 1;
  const lastElem = array[lastInd];

  const firstElem = array[0];
  
  return [firstElem, lastElem];
}


console.log(getExtremeElements([1, 2, 3, 4, 5])) // повертає [1, 5]
console.log(getExtremeElements(["Earth", "Mars", "Venus"])) // повертає ["Earth", "Venus"]
console.log(getExtremeElements(["apple", "peach", "pear", "banana"])) // повертає ["apple", "banana"]

/* ================================================ */

function getLength(array) {
  const arr = array.join("");
  return arr.length;
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // повертає 22
console.log(getLength(["M", "a", "n", "g", "o"])); // повертає 5
console.log(getLength(["top", "picks", "for", "you"])); // повертає 14


/* ================================================ */

function calculateEngravingPrice(message, pricePerWord) {

  const mess = message.split(" ");

  return mess.length * pricePerWord
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // повертає 50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // повертає 100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); // повертає 160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); // повертає 80


/* ================================================ */

function getSlice(array, value) {
  
const indValue = array.indexOf(value);
  
return indValue >= 0 ? array.slice(0, indValue + 1) : []; 
} 

console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango")); // повертає `["Mango"]`
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // повертає `["Mango", "Poly"]`
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // повертає `["Mango", "Poly", "Ajax"]`
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey")); // повертає `[]`
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob")); // повертає `[]`


/* ================================================ */

function createArrayOfNumbers(min, max) {

  const array = [];
   
  for (let i = min; i <= max; i += 1) {
	
    array.push(i)
  }
  return array;
 }

console.log(createArrayOfNumbers(14, 17));  // повертає `[14, 15, 16, 17]`
console.log(createArrayOfNumbers(29, 34)); // повертає `[29, 30, 31, 32, 33, 34]`
console.log(createArrayOfNumbers(1, 3)); // повертає `[1, 2, 3]`


/* ================================================ */


function calculateTotalPrice(order) {
let total = 0;
  
  for (let number of order) {
    total += number; }

  return total;
  
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає `138`
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає `1116`
console.log(calculateTotalPrice([164, 48, 291])); // повертає `503`


/* ================================================ */

function getEvenNumbers(start, end) {

  let array = [];
   
  for (let i = start; i <= end; i += 1) {
	if (i % 2 === 0) {
        array.push(i)
  }
  }
  return array;
}

console.log(getEvenNumbers(2, 5));  // повертає `[2, 4]`
console.log(getEvenNumbers(3, 11)); // повертає `[4, 6, 8, 10]`
console.log(getEvenNumbers(6, 12));  //` повертає `[6, 8, 10, 12]`
console.log(getEvenNumbers(8, 8));  // повертає `[8]`
console.log(getEvenNumbers(7, 7)); // повертає `[]`
console.log(getEvenNumbers(21, 39)); //


/* ================================================ */

function checkStorage(storage, item) {

  const it = item.toLowerCase();

  return storage.includes(it) ? `${it} is available to order!` : `Sorry! We are out of stock!`;
}


console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // повертає `plum is available to order!`
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));  // повертає `pear is available to order!`
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));  // повертає `Sorry! We are out of stock!`
console.log(checkStorage(["apple", "plum", "pear"], "orange")); // повертає `Sorry! We are out of stock!`
console.log(checkStorage(["apple", "plum", "pear"], "plum")); // повертає `plum is available to order!`
console.log(checkStorage(["apple", "plum", "pear"], "pear")); // повертає `pear is available to order!`


/* ================================================ */

function getCommonElements(array1, array2) {

  let array = [];

  for (let i = 0; i <= array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      array.push(array1[i])
    }
  }
  return array;   
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  // повертає `[1, 2]`
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає `[10, 30, 40]`
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає `[12, 27, 3]`
console.log(getCommonElements([1, 2, 3], [2, 4]));  // повертає `[2]`
console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає `[]`


/* ================================================ */

function createReversedArray() {

  const args = Array.from(arguments);
  return args.toReversed();
}
console.log(createReversedArray(412, 371, 94, 63, 176));  // повертає `[176,63,94,371,412]`
console.log(createReversedArray(12, 85, 37, 4)); // повертає `[4,37,85,12]`
console.log(createReversedArray(164, 48, 291)); // повертає `[291,48,164]`
console.log(createReversedArray());  // повертає `[]`

/* ================================================ */

function calculateTax(amount, taxRate = 0.2) {

  return amount * taxRate;
}

console.log(calculateTax(100, 0.1)); // 10
console.log(calculateTax(100)); // 20
console.log(calculateTax(500)); // 100
console.log(calculateTax(200, 0.3)); // повертає `60`


/* ======= ПЕРВАЯ ЗАДАЧА ДЗ-3 ========================== */

function slugify(title) {

  const tit = title.toLowerCase();

  const arraySlug = tit.split(" ");

  return arraySlug.join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


/* ======= ВТОРАЯ ЗАДАЧА ДЗ-3 ========================== */

function makeArray(firstArray, secondArray, maxLength) {

  const fullArray = firstArray.concat(secondArray);

  return fullArray.slice(0, maxLength);
} 

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
console.log(makeArray(["111", "222"], ["rrrr", "U2597", "gggrett", "ffffff", "567"], 5)); // []


/* ==== ТРЕТЬЯ ЗАДАЧА ДЗ-3 ========================== */

function filterArray(numbers, value) {

  let array = [];

  for (const number of numbers) {
    if (number > value) {
              
      array.push(number)
    }
   }
    return array;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]