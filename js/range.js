const span = document.querySelector('.char-range')

export const initialValue = () => {
    const inputRange = document.querySelector('.range').value
    span.textContent =  inputRange
}

export const rangeValue = (e) => {
    const value = e.target.value
    console.log(value);
    return span.textContent = value
}