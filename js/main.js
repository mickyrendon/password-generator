// global vars**
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['~','!','@','#','$','%','^','&','*','|', '/','"',':','<','>','?']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const arrs = [numbers, symbols, alphabet]
const pswdLength = 10
const strongpswd = []

const paswdF = document.querySelector('.app')

const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1))
}

for (i = 0; i < pswdLength; i++){
    const limits = arrs[randomNumbers(0, arrs.length -1)]
    const rndmChar = limits[randomNumbers(0, limits.length -1)]

    strongpswd.push(rndmChar)   
}
const finalPswd = strongpswd.join('')

paswdF.textContent = finalPswd  