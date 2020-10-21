export const saveToken = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = () => {
    const token = localStorage.getItem('token')
    //const token = 'ok'
    return token
}

export const clearToken = () => {
    localStorage.removeItem('token')
}