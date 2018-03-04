export const SET_CONNECTED_STATE = 'SET_CONNECTED_STATE'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTING_STATE = 'SET_CONNECTING_STATE'
export const SEND_MESSAGE = "SEND_MESSAGE"
export const CONNECT = "CONNECT"
export const DISCONNECT = "DISCONNECT"


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

export function sendMessage(msg) {
    return {
        type: SEND_MESSAGE,
        msg
    }
}

export function connect() {
    return {
        type: CONNECT
    }
}

export function disconnect() {
    return {
        type: DISCONNECT
    }
}

