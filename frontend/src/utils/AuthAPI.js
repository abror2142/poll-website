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
    const msg = await resp.json()

    if (msg.status === 410) {
        tokenStorage.removeItem('sessionToken')
      }
    if (msg.meta?.session_token) {
        tokenStorage.setItem('sessionToken', msg.meta.session_token)
      }
    if ([401, 410].includes(msg.status) || (msg.status === 200 && msg.meta?.is_authenticated)) {
        const event = new CustomEvent('allauth.auth.change', { detail: msg })
        document.dispatchEvent(event)
    }
    return msg
} 

export async function signup(data) {
    return await request('POST', URLs.SIGNUP, data)
}

export async function activation(data) {
    return await request('POST', URLs.ACTIVATION, data)
}

export async function resendActivation(data) {
    return await request('POST', URLs.SIGNUP, data)
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
    return await request('POST', URLs.JWT_CREATE, data)
}

export async function verifyJWT(data) {
    return await request('POST', URLs.JWT_VERIFY, data)
}

export async function refreshJWT(data) {
    return await request('POST', URLs.JWT_REFRESH, data)
}
