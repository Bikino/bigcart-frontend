import React from 'react'

const AuthContext = React.createContext({
    logout: () => { },
    userInfo: {},
})

export default AuthContext