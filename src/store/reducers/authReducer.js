const initialState = {
    authError: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('Login failed');
            return {
                ...state,
                authError: 'Login Failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success', state);
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign out success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('Sign up success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Sign up failed', action.err);
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;