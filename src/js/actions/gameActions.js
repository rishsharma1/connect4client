export const SET_GAME_UPDATE = 'SET_GAME'
export const SET_GAME_UPDATE_LOADING = 'SET_GAME_UPDATE_LOADING'
export const SET_GAME_UPDATE_KEY = 'SET_GAME_UPDATE_KEY'
export const SET_GAME_UPDATE_TURN = 'SET_GAME_UPDATE_TURN'
export const SET_GAME_FOUND = 'SET_GAME_FOUND'
export const SET_WAITING_FOR_MOVE = 'SET_WAITING_FOR_MOVE'
export const SET_INVALID_TURN = 'SET_INVALID_TURN'
export const SET_INVALID_MOVE = 'SET_INVALID_MOVE'
export const SET_GAME_STATE = 'SET_GAME_STATE'
export const SET_GAME_WINNER = 'SET_GAME_WINNER'
export const SET_GAME_MOVES = 'SET_GAME_MOVES'


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

export function setGameFound(gameFound) {
    return {
        type: SET_GAME_FOUND,
        gameFound
    }
}

export function setWaitingForMove(waitingForMove) {
    return {
        type: SET_WAITING_FOR_MOVE,
        waitingForMove
    }
}

export function setInvalidTurn(invalidTurn) {
    return {
        type: SET_INVALID_TURN,
        invalidTurn
    }
}

export function setInvalidMove(invalidMove) {
    return {
        type: SET_INVALID_MOVE,
        invalidMove
    }
}


export function setGameState(gameState) {
    return {
        type: SET_GAME_STATE,
        gameState
    }
}

export function setGameWinner(winner) {
    return {
        type: SET_GAME_WINNER,
        winner
    }
}

export function setGameMoves(moves) {
    return {
        type: SET_GAME_MOVES,
        moves
    }
}
