let message:string = 'Hello, world2'
const h1 = document.createElement('h1')
h1.textContent = message
document.body.appendChild(h1)

/*

console.log(message)

tsc app.ts
ts-node app.ts 

tip sistemi ekleyerek, dinamik tiplerde oluşabilecek hatalardan kaçınmanızı sağlar.
gelmesi planlanan js özelliklerini daha erken kullanmaınızı sağlar.

*/ 
