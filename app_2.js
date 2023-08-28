/*const reservedText = (text:string) =>{
    return text.split('').reverse().join('')
}

console.log('reservedText("123")', reservedText(123))*/
// id:number => parametre ve tipi
// :Product bir interface oluşturup dönüş tiplerini belirtiyoruz
// interfacede bulunan değerlerin hepsi dönüşte olması gerekir
function getProduct(id) {
    return {
        id: id,
        name: 'Urun #' + id,
        price: 55,
        test: false
    };
}
var product = getProduct(1);
function show(name, price) {
    return "urun = ".concat(name, " fiyat = ").concat(price);
}
console.log(show(product.name, product.price));
var user;
var multiply;
multiply = function (x, y) { return x * y; };
console.log(multiply(1, 2));
