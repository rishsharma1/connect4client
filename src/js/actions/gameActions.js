export const SET_GAME_UPDATE = 'SET_GAME'
export const SET_GAME_UPDATE_LOADING = 'SET_GAME_UPDATE_LOADING'
export const SET_GAME_UPDATE_KEY = 'SET_GAME_UPDATE_KEY'
export const SET_GAME_UPDATE_TURN = 'SET_GAME_UPDATE_TURN'


export function setGameUpdate(game) {
    return {
        type: SET_GAME_UPDATE,
        game
    }
}

export function setGameKeyUpdate(key) {
    return {
        type: SET_GAME_UPDATE_KEY,
        key
    }
}

export function setGameTurnUpdate(turn) {
    return {
        type: SET_GAME_UPDATE_TURN,
        turn 
    }
}

export function setGameUpdateLoading(loading) {
    return {
        type: SET_GAME_UPDATE_LOADING,
        loading
    }
}

