import { isEmail } from "validator";

export const USERNAME_REGEX = /^[a-zA-Z0-9]+$/
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){8, 24}$/

function validateForm(username, email, password, rePassword) {
    
    let errors = {
        username: [],
        email: [],
        password: [],
        rePassword: [],
    }

    if(username) {
        if(username.length < 4)
            errors.username.push('Username must be at least 4 characters.')
        if(username.length > 16)
            errors.username.push('Username must be less than 16 characters.')
        if(!USERNAME_REGEX.test(username))
            errors.username.push('Username can include only letters, and numbers.')
    } else {
        errors.username.push('Username is required.')
    }

    if(email) {
        if(!isEmail(email))
            errors.email.push('Please enter a valid Email.')
    } else {
        errors.email.push('Email is required.')
    }

    if(password) {
        if(password.length < 8)
            errors.password.push('Password must be at least 8 characters.')
        if(password.length > 24)
            errors.password.push('Password must be less than 24 characters.')
        if(!PASSWORD_REGEX.test(password))
            errors.password.push('Password must include an uppercase letter, a lowercase letter and a number.')
    } else {
        errors.password.push('Password is required.')
    }

    if(rePassword) {
        if(rePassword.length != password)
            errors.rePassword.push('Confirm Password must be at least 4 characters.')
    } else {
        errors.rePassword.push('Confirm Password is required.')
    }

    return errors
}

export default validateForm