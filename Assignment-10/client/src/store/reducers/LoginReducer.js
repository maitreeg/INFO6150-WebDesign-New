// import { LOGIN_ACTION_KEY } from '../constant';
// const initial_state = {
// userDetails: {}
// }
// const LoginReducer = (state = initial_state, action) => {
// switch (action.type) {
// case LOGIN_ACTION_KEY:
// return { ...state, userDetails: { ...action.payload } };
// default:
// return state;
// }
// }
// export default LoginReducer;
import { LOGIN_ACTION_KEY } from '../constant';

const initialState = {
    userDetails: {},
    userRole: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION_KEY:
            const { userDetails, userRole } = action.payload;
            return {
                ...state,
                userDetails: userDetails,
                userRole: userRole
            };
        default:
            return state;
    }
};

export default LoginReducer;
