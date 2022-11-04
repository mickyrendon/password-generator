import { words } from './api.js'
import { randomNumbers } from './random.js'

// global vars**
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['~','!','@','#','$','%','^','&','*','|', '/','"',':','<','>','?']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const inputPswrd = document.querySelector('.app')
const range = document.querySelector('.range')
const submit = document.querySelector('form')
const copyBtn = document.querySelector('.copy')

// listening range input value
const rangeEv = async (value) => {
    const { rangeValue } = await import('./range.js')
    // debugger
    return rangeValue(value)
}
export const listenRange = range.addEventListener('input', rangeEv) 


submit.addEventListener('submit', (e) => {
    copyBtn.classList.remove('hidden')
    e.preventDefault()
    const formE = e.target
    const newRange = formE.range.value
    console.log(newRange);
    const checkboxs =  {
        letters: formE.letters.checked,
        numbers: formE.numbers.checked,
        symbols: formE.symbols.checked,
        words: formE.words.checked
    }
    iterator(newRange, checkboxs)
})

function iterator (range, checks){
    const paswdF = inputPswrd
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
    // TODO funciona pero afuera de la funcion, mejorar el codigo para que al checkar el btn se deseleccionen los demas y viceversa
    submit.words.addEventListener('change', () => {
            // submit.letters.checked = false
            // submit.numbers.checked = false
            // submit.symbols.checked = false
            // arrs.push(words)
            console.log('change qower');
    })
    // if(checks.words){
    // }

    if(arrs.length < 1){
        copyBtn.classList.add('hidden')
        return alert('Incluye por lo menos una opción para generar tu contraseña')
    }

    for (let i = 0; i < pswdLength; i++){
        const limits = arrs[randomNumbers(0, arrs.length -1)]
        // debugger
        const rndmChar = limits[randomNumbers(0, limits.length -1)]

        strongpswd.push(rndmChar)   
    }
    const finalPswd = strongpswd.join('')

    paswdF.textContent = finalPswd  
    return finalPswd
}

const copyEv = async () => {
    const {copyPswrd} = await import('./copyPswrd.js')
    copyPswrd()
}
copyBtn.addEventListener('click', copyEv)
// console.log(words);