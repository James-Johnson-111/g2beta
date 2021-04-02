import * as actionsTypes from './actions';

const initialState = {
    authenticate: false,
    user_name: null,
    user_f_name: null,
    user_l_name: null,
    user_city: null,
    user_state: null,
    user_country: null,
    user_gender: null,
    user_d_birth: null,
    user_email: null,
    facebook: null,
    twitter: null,
    linkedin: null,
    pinterest: null,
    google: null,
    instagram: null,
    url: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.USER_LOGIN:
            return {
                ...state,
                authenticate: true
            };
        case actionsTypes.USER_LOGOUT:
            return {
                ...state,
                authenticate: false
            };
        case actionsTypes.USER_DETAILS:
            return {
                ...state,
                user_id: action.usrid,
                user_name: action.usrname,
                user_f_name: action.usrfname,
                user_l_name: action.usrlname,
                user_city: action.usrcity,
                user_state: action.usrstate,
                user_country: action.usrcountry,
                user_gender: action.usrgender,
                user_d_birth: action.usrdbirth,
                user_email: action.usremail,
                facebook: action.facebook,
                twitter: action.twitter,
                linkedin: action.linkedin,
                pinterest: action.pinterest,
                google: action.google,
                instagram: action.instagram,
                url: action.url,
                authenticate: true
            };
        case actionsTypes.UPDATE_USER_DETAILS:
            return {
                ...state,
                [action.field]: action.value,
                authenticate: true
            };
        default:
            return state;
    }
};

export default reducer;