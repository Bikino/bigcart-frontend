export const saveToken = (token, refreshToken) => {
    localStorage.setItem('token', token)
    localStorage.setItem('refresh-token', refreshToken)
}

export const getToken = () => {
    const token = localStorage.getItem('token')
    //const token = 'ok'
    return token
}

export const getRefreshToken = () => {
    const token = localStorage.getItem('refresh-token')
    return token
}

export const clearToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh-token')
}