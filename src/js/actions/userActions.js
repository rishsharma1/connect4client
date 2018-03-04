export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_USER_COLOR = 'SET_USER_COLOR'


export function setUserName(name) {
    return {
        type: SET_USER_NAME,
        name
    }
}

export function setPlayerColor(color) {
    return {
        type: SET_USER_COLOR,
        color
    }
}

