const checks = document.querySelectorAll('input[type="checkbox"]')

export const filterArray = () => {
    const element = [...checks]
    const elMap = element.filter((item) => item.name !== 'words')

    return elMap
}

export const checkbox = () => {
    const element = checks
    element.forEach((item) => {
        return item.checked = false
    })
}

// others checks
export const othersCh = () => {
    const element = [...checks]
    const lastEl = element.at(-1)
    
    if(lastEl.checked === true){
        return lastEl.checked = false
    }
}

// checkbox word event
export const checkboxWords = (e) => {
    if(e.target.checked === true){
        const checksStatus = filterArray().forEach((el) => { el.checked = false})

        return checksStatus
    }else {
        return e.target.checked = false
    }
}