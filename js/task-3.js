
/* Третья задача */

function getElementWidth(content, padding, border) {
    const conte = Number.parseFloat(content);
    const padd = Number.parseFloat(padding);
    const bord = Number.parseFloat(border);

    return conte + padd * 2 + bord * 2;

}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

console.log(getElementWidth("200px", "30px", "6.5"));








