import jwt from 'jsonwebtoken'
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

export const log_in = () => {
    return {msg:'logged in', token}
}

export const sign_up = () => {
    return {msg:'logged in', token:''}
}