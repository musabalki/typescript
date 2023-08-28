/* 
const reservedText = text =>{
    if(typeof text!=='string'){
        throw new Error("Hatalı bir tip gönderdiniz")
    }        
    return text.split('').reverse().join('')

}

try{
    console.log('reservedText("test")', reservedText(123))
}catch(err){
    console.log('err', err.message)
}
*/

function getProduct(id){
    return {
        id,
        name:'Urun #' +id,
        price:55
    }
}

function show (name,price){
    return `urun = ${name} fiyat = ${price}`
}

const product = getProduct(2)
//console.log(product.test)

console.log(show(product.name,product.price))