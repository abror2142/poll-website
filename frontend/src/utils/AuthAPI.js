const BASE_URL = 'http://localhost:8000/account/'

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

