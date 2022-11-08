export const copyPswrd = () => {
    const pswrdText = document.querySelector('.app').textContent
    const clipboard = globalThis.navigator.clipboard.writeText(pswrdText)

    // geting modal and setting the span textcontent
    const modal = document.querySelector('.modal')
          modal.classList.remove('hidden')
    const sibling = [...modal.children]
    const alertCtr = sibling[0].firstElementChild
    const spanTxt = alertCtr.textContent = '¡Contraseña copiada!'

    return clipboard
}