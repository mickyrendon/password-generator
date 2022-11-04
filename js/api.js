const api = 'https://goquotes-api.herokuapp.com/api/v1/random?count=5'
const response = await fetch (api)
const products = await response.json()

let words = products.quotes.map(quote => quote.text)
words = words.join('').split(' ').sort()

export {words}