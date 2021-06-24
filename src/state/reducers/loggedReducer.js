const initState = JSON.parse(localStorage.getItem("logged")) || {
    user: {},
    isLogged: false
}

const loggedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                user: action.payload.user,
                isLogged: true
            };
        case 'LOGOUT':
            return {
                user: '',
                isLogged: false
            };
        default:
            return state;
    }
}

export default loggedReducer