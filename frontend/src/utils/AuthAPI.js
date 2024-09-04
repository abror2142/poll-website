const BASE_URL = 'http://localhost:8000/accounts/'

export const URLs = {

    // Auth: Basics
    SIGNUP: BASE_URL + 'users/',
    ACTIVATION: BASE_URL + 'users/activation/',
    RESEND_ACTIVATE: BASE_URL + 'users/resend_activation/',
    USER_ME: BASE_URL + 'users/me/',
    SET_PASSWORD: BASE_URL + 'users/set_password/',
    RESET_PASSWORD: BASE_URL + 'users/reset_password/',
    RESET_PASSWORD_CONFIRM: BASE_URL + 'users/reset_password_confirm/',

    // JWT Endpoints
    JWT_CREATE: BASE_URL + 'jwt/create/',
    JWT_REFRESH: BASE_URL + 'jwt/refresh/',
    JWT_VERIFY: BASE_URL + 'jwt/verify/',
}

const ACCEPT_JSON = {
    accept: 'application/json'
}

const tokenStorage = window.sessionStorage

async function request(method, path, data, headers) {
    const options = {
        method,
        headers: {
            ...ACCEPT_JSON,
            ...headers
        }
    }

    if(typeof data !== 'undefined'){
        options.body = JSON.stringify(data)
        options.headers['Content-Type'] = 'application/json'
    }

    const resp = await fetch(path, options)
    return resp
}


export async function signup(data) {
    return await request('POST', URLs.SIGNUP, data)
}

export async function activation(data) {
    return await request('POST', URLs.ACTIVATION, data)
}

export async function resendActivation(data) {
    return await request('POST', URLs.RESEND_ACTIVATE, data)
}

export async function getUser() {
    const token = ""
    headers = {
        "Authentication": `JWT ${token}`
    }
    return await request('GET', URLs.SIGNUP, null, headers)
}

export async function putUser(data) {
    const token = ""
    headers = {
        "Authentication": `JWT ${token}`
    }
    return await request('PUT', URLs.SIGNUP, data, headers)
}

export async function patchUser(data) {
    const token = ""
    headers = {
        "Authentication": `JWT ${token}`
    }
    return await request('PATCH', URLs.USER_ME, data, headers)
}

export async function deleteUser() {
    const token = ""
    headers = {
        "Authentication": `JWT ${token}`
    }
    return await request('DELETE', URLs.USER_ME, null, headers)
}

export async function setPassword(data) {
    return await request('POST', URLs.SET_PASSWORD, data)
}

export async function resetPassword(data) {
    return await request('POST', URLs.RESET_PASSWORD, data)
}

export async function resetPasswordConfirm(data) {
    return await request('POST', URLs.RESET_PASSWORD_CONFIRM, data)
}

export async function createJWT(data) {
    // Setting, or removing token from session storage 
    // based on the result of the request
    const response = await request('POST', URLs.JWT_CREATE, data)
    if(response.status === 200) {
        const msg = await response.json()
        tokenStorage.setItem("access", msg.access)
        tokenStorage.setItem("refresh", msg.refresh)
    } else if(response.status === 401) {
        tokenStorage.removeItem("access")
        tokenStorage.removeItem("refresh")
    }
    return response
}

export async function verifyJWT(data) {
    return await request('POST', URLs.JWT_VERIFY, data)
}

export async function refreshJWT(data) {
    return await request('POST', URLs.JWT_REFRESH, data)
}
