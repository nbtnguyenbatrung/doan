import {loginTypes} from "../../actions/login/types";

const initialState = {
    loggedInSuccess: false,
    error: null,
    accessToken: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.REQUEST:
            return {
                ...state,
                loginProgress: true,
                loggedInSuccess: false,
            };
        case loginTypes.SUCCESS:
            return {
                ...state,
                refreshToken: action.refreshToken,
                accessToken: action.accessToken,
                oauth2Token: action.oauth2Token,
                loggedInSuccess: true,
                loginProgress: false,
                error: null,
            };
        case loginTypes.FAILURE:
            return {
                ...state,
                error: action.error,
                loggedInSuccess: false,
            };
        case loginTypes.LOGOUT: {
            return {
                ...state,
                loggedInSuccess: false,
                accessToken: null,
                oauth2Token: null,
            };
        }
        case loginTypes.REFRESH_ACCESS_TOKEN_REQUEST:
            return {
                ...state,
            };
        case loginTypes.REFRESH_ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                accessToken: action.accessToken,
                "refresh-token-error": null,
            };
        case loginTypes.REFRESH_ACCESS_TOKEN_ERROR:
            return {
                ...state,
                "refresh-token-error": action.error,
                loggedInSuccess: false,
            };
        case loginTypes.GET_TOKEN_REQUEST:
            return {
                ...state,
                getTokenProgress: true,
            };
        case loginTypes.GET_TOKEN_SUCCESS:
            return {
                ...state,
                oauth2Token: action.oauth2Token,
            };
        case loginTypes.GET_TOKEN_ERROR:
            return {
                ...state,
                getTokenError: true,
                "oauth2-token-error": action.error,
            };
        case loginTypes.REFRESH_OAUTH2_TOKEN_REQUEST:
            return {
                ...state,
                getTokenProgress: true,
            };
        case loginTypes.REFRESH_OAUTH2_TOKEN_SUCCESS:
            return {
                ...state,
                oauth2Token: action.oauth2Token,
                "oauth2-token-error": null,
            };
        case loginTypes.REFRESH_OAUTH2_TOKEN_ERROR:
            return {
                ...state,
                getTokenError: true,
                "oauth2-token-error": action.error,
            };
        default:
            return state;
    }
};

export default loginReducer;
