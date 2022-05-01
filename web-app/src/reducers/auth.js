let initialState = {
    username: '',
    accessToken: '',
    refreshToken: '',
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                username: action.username,
                accessToken: action.access,
                refereshToken: action.refresh,
            }
        default:
            return state
    }
}


export default authReducer;