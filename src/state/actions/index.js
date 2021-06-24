export const loginin = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};