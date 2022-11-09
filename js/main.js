import { words } from './api.js'
import { randomNumbers } from './random.js'
import { filterArray } from './checkbox.js'

// global vars**
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['~','!','@','#','$','%','^','&','*','|', '/','"',':','<','>','?']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const inputPswrd = document.querySelector('.app')
const range = document.querySelector('.range')
const submit = document.querySelector('form')
const checkWrd = document.querySelector('.words')
const copyBtn = document.querySelector('.copy')

// LISTENING RANGE INPUT VALUE
const rangeEv = async (value) => {
    const { rangeValue } = await import('./range.js')
    return rangeValue(value)
}
export const listenRange = range.addEventListener('input', rangeEv) 

// LISTENING AND VALIDATING CHECHBOX !== 'WORDS'
const elements = [...filterArray()]

const othersChecks = async () => {
    const { othersCh } = await import('./checkbox.js')
    return othersCh()
}

elements.forEach((e) => e.addEventListener('change', othersChecks))
// LISTENING AND VALIDATING CHECKBOX 'WORDS'
const wordsCheckEv = async (e) => {
    const { checkboxWords } = await import('./checkbox.js')
    return checkboxWords(e)
}
checkWrd.addEventListener('change', wordsCheckEv)

submit.addEventListener('submit', (e) => {
    copyBtn.classList.remove('hidden')
    e.preventDefault()
    const formE = e.target
    const newRange = formE.range.value
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

    if(checks.letters){
        arrs.push(alphabet)
    }
    if(checks.numbers){
        arrs.push(numbers)
    }
    if(checks.symbols){
        arrs.push(symbols)
    }
// recordar que cada palabra equivale a un caracter
    if(checks.words){
        console.log(words);
        arrs.push(words)
    }

    if(arrs.length < 1){
        copyBtn.classList.add('hidden')
    // geting modal and setting the span textcontent
        const modal = document.querySelector('.modal')
              modal.classList.remove('hidden')
        const sibling = [...modal.children]
        const alertCtr = sibling[0].firstElementChild
        const spanTxt = alertCtr.textContent = 'Incluye por lo menos una opción para generar tu contraseña.'
        
        return spanTxt
    }

    for (let i = 0; i < pswdLength; i++){
        const limits = arrs[randomNumbers(0, arrs.length -1)]
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

// modal
const btn = document.querySelector('.accept')
const acceptBtn = async (e) => {
    const {acceptF} = await import('./modal.js')
    acceptF(e)
}
btn.addEventListener('click', acceptBtn)