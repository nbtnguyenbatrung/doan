import {call, fork, put, takeEvery} from "@redux-saga/core/effects";
import {getToken, refreshToken, signIn} from "../../../api/login/api";
import {
    getTokenSuccess,
    loginError,
    loginSuccess,
    refreshAccessTokenError,
    refreshAccessTokenSuccess,
} from "../../actions/login/actions";
import {loginTypes} from "../../actions/login/types";
import {message} from "antd";

function* onLoginStartAsync(action) {
    try {
        const {username, password} = action;

        const responseOauth2 = yield call(getToken);
        if (responseOauth2.status === 200) {
            yield put(getTokenSuccess(responseOauth2.data));
            localStorage.setItem("oauth2Token", JSON.stringify(responseOauth2.data));
        }

        let oauth2Token = responseOauth2.data;

        const response = yield call(
            signIn,
            username,
            password,
            oauth2Token.access_token,
        )
        if (response.status === 200) {
            yield put(loginSuccess(response.data, oauth2Token));
            localStorage.setItem("accessToken", JSON.stringify(response.data));
        }
    } catch (error) {
        yield put(loginError(error.response.data));
        message.error("Sai tài khoản hoặc mật khẩu. Hãy thử lại");
    }
}

function* onLogin() {
    yield takeEvery(loginTypes.REQUEST, onLoginStartAsync);
}

function* onRefreshTokenStartAsync() {
    try {
        const refresh_token = JSON.parse(
            localStorage.getItem("accessToken")
        ).refreshToken;
        const oauth2Token = JSON.parse(
            localStorage.getItem("oauth2Token")
        ).access_token;
        const response = yield call(refreshToken, refresh_token, oauth2Token);
        if (response.status === 200) {
            localStorage.setItem("accessToken", JSON.stringify(response.data));
            yield put(refreshAccessTokenSuccess(response.data));
        }
    } catch (error) {
        yield put(refreshAccessTokenError(error.response));
        localStorage.clear();
        message.error(error.response.data.message);
        message.error("Vui lòng đăng nhập lại!");
        setTimeout(() => {
            window.location.href = "/";
        }, 200);
    }
}

function* onRefreshToken() {
    yield takeEvery(
        loginTypes.REFRESH_OAUTH2_TOKEN_SUCCESS,
        onRefreshTokenStartAsync
    );
}

function* onLogoutStartAsync() {
    try {
        window.localStorage.clear();
        window.location.href = "/";
    } finally {
        window.localStorage.clear();
    }
}

function* onLogout() {
    yield takeEvery(
        loginTypes.LOGOUT,
        onLogoutStartAsync
    );
}

const login = [fork(onLogin), fork(onRefreshToken), fork(onLogout)];

export default login;
