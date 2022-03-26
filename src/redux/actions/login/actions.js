import {loginTypes} from "./types";

export const getTokenStart = () => ({
	type: loginTypes.GET_TOKEN_REQUEST,
});

export const getTokenSuccess = (oauth2Token) => ({
	type: loginTypes.GET_TOKEN_SUCCESS,
	oauth2Token,
});

export const getTokenError = (error) => ({
	type: loginTypes.GET_TOKEN_ERROR,
	error: error,
});

export const refreshOauth2TokenStart = () => ({
	type: loginTypes.REFRESH_OAUTH2_TOKEN_REQUEST,
});

export const refreshOauth2TokenSuccess = (oauth2Token) => ({
	type: loginTypes.REFRESH_OAUTH2_TOKEN_SUCCESS,
	oauth2Token,
});

export const refreshOauth2TokenError = (error) => ({
	type: loginTypes.REFRESH_OAUTH2_TOKEN_ERROR,
	error,
});

export const loginStart = (username, password, oauth2Token) => ({
	type: loginTypes.REQUEST,
	username,
	password,
	oauth2Token,
	loggedInSuccess: false,
});

export const loginSuccess = (accessToken, oauth2Token) => ({
	type: loginTypes.SUCCESS,
	accessToken,
	oauth2Token,
	loggedInSuccess: true,
});

export const loginError = (error) => ({
	type: loginTypes.FAILURE,
	error: error,
	loginSuccess: false,
});
export const refreshAccessTokenStart = () => ({
	type: loginTypes.REFRESH_ACCESS_TOKEN_REQUEST,
});

export const refreshAccessTokenSuccess = (accessToken) => ({
	type: loginTypes.REFRESH_ACCESS_TOKEN_SUCCESS,
	accessToken,
});

export const refreshAccessTokenError = (error) => ({
	type: loginTypes.REFRESH_ACCESS_TOKEN_ERROR,
	error,
});

export const logoutStart = () => ({
	type: loginTypes.LOGOUT,
});
