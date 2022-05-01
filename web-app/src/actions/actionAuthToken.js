export const setAuthToken = (username, access, refresh) => ({ 
    type: 'SET_AUTH_TOKEN',
    username,
    access,
    refresh,
})