import { isEmail } from "validator";

export const USERNAME_REGEX = /^[a-zA-Z0-9]+$/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/

function validateForm(username, email, password, rePassword) {
    
    let errors = {
        username: [],
        email: [],
        password: [],
        rePassword: [],
    }

    if(username) {
        if(username.length < 4)
            errors.username.push('must be at least 4 characters.')
        if(username.length > 16)
            errors.username.push('must be less than 16 characters.')
        if(!USERNAME_REGEX.test(username))
            errors.username.push('can include only letters, and numbers.')
    } else {
        errors.username.push('username is required.')
    }

    if(email) {
        if(!isEmail(email))
            errors.email.push('invalid Email.')
    } else {
        errors.email.push('email is required.')
    }

    if(password) {
        if(password.length < 8)
            errors.password.push('must be at least 8 characters.')
        if(password.length > 24)
            errors.password.push('must be less than 24 characters.')
        if(!PASSWORD_REGEX.test(password))
            errors.password.push('must include an uppercase letter, a lowercase letter and a number.')
    } else {
        errors.password.push('password is required.')
    }

    if(rePassword) {
        if(rePassword != password)
            errors.rePassword.push('passwords must match!')
    } else {
        errors.rePassword.push('confirm password is required.')
    }

    return errors
}

export default validateForm