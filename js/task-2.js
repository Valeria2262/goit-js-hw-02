

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