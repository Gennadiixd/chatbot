export const saveToLocalStorage = (name, value) => {
    const fromLocalStorage = JSON.parse(localStorage.getItem(name));
    if (fromLocalStorage !== value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

export const getFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name));
}