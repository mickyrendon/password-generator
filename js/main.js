// global vars**
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['~','!','@','#','$','%','^','&','*','|', '/','"',':','<','>','?']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']



const submit = document.querySelector('form')

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    const formE = e.target
    const newRange = formE.range.value
    const checkboxs =  {
        letters: formE.letters.checked,
        numbers: formE.numbers.checked,
        symbols: formE.symbols.checked,
        words: formE.words.checked
    }
    console.log(checkboxs);

    iterator(newRange, checkboxs)
})
const randomNumbers = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1))
}

function iterator (range, checks){
    const paswdF = document.querySelector('.app')
    // const arrs = [numbers, symbols, alphabet]
    const arrs = []
    const strongpswd = []
    const pswdLength = range
// TODO mejorar el condicional
    if(checks.letters){
        arrs.push(alphabet)
    }
    if(checks.numbers){
        arrs.push(numbers)
    }
    if(checks.symbols){
        arrs.push(symbols)
    }

    for (i = 0; i < pswdLength; i++){
        const limits = arrs[randomNumbers(0, arrs.length -1)]
        const rndmChar = limits[randomNumbers(0, limits.length -1)]

        strongpswd.push(rndmChar)   
    }
    const finalPswd = strongpswd.join('')

    console.log(arrs);
    return paswdF.textContent = finalPswd  
}

