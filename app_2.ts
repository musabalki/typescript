/*const reservedText = (text:string) =>{      
    return text.split('').reverse().join('')
}

console.log('reservedText("123")', reservedText(123))*/

interface Product {
    id:number,
    name:string,
    price:number,
    test:boolean
}


// id:number => parametre ve tipi
// :Product bir interface oluşturup dönüş tiplerini belirtiyoruz
// interfacede bulunan değerlerin hepsi dönüşte olması gerekir

function getProduct(id:number):Product{
    return {
        id,
        name:'Urun #' +id,
        price:55,
        test:false
    }
}

const product = getProduct(1)


function show (name:string,price:number){
    return `urun = ${name} fiyat = ${price}`
}

console.log(show(product.name,product.price))


let user: {
    name:string,
    surname:string,
    age:number,
}

let multiply:(x:number,y:number)=>number
multiply = (x,y)=>x*y

console.log(multiply(1,2))