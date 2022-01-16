export const getStorage = (key) => {
    localStorage.getItem(key) ? localStorage.getItem(key) : []
}

export const setStorage = () => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const toggleStorage = (storage, id) => {
    const data = getStorage(key)
    const setData = new Set(data)
    if (setData.has(id)) {
        setData.delete(id)
    } else {
        setData.add(id)
    }
    setStorage(key, setData)
}