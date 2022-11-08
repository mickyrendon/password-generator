export const acceptF = (e) => {
    const parent = e.target.parentNode
    const grandParent = parent.parentNode

    return grandParent.classList.add('hidden')
}
