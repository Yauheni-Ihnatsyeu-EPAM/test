export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const USER_INFO = 'USER_INFO';
export const USER_LIST = 'USER_LIST';
/*
 * other constants
 */

/*
 * action creators for todos
 */

export function Login(userName) {
    return {type: LOGIN, userName}
}
export function Logout(result) {
    return {type: LOGOUT, result}
}
export function UserInfo(info) {
    return {type: USER_INFO, info}
}
export function UserList(list) {
    return {type: USER_LIST, list}
}

