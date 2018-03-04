export const SET_GAME_UPDATE = 'SET_GAME'
export const SET_GAME_UPDATE_LOADING = 'SET_GAME_UPDATE_LOADING'
export const SET_CONNECTED_STATE = 'SET_CONNECTED_STATE'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTING_STATE = 'SET_CONNECTING_STATE'

function setGameUpdate(game) {
    return {
        type: SET_GAME_UPDATE,
        game
    }
}

export function setGameUpdateLoading(loading) {
    return {
        type: SET_GAME_UPDATE_LOADING,
        loading
    }
}

export function connected(c) {
    return {
        type: SET_CONNECTED_STATE,
        c
    }
}

export function connecting(c) {
    return {
        type: SET_CONNECTING_STATE,
        c
    }
} 

export function messageReceived(msg) {
    return {
        type: MESSAGE_RECEIVED,
        msg
    }
}
