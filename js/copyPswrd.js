export const copyPswrd = () => {
    const pswrdText = document.querySelector('.app').textContent
    const clipboard = globalThis.navigator.clipboard.writeText(pswrdText)
    alert('contraseña copiada')
    return clipboard
}