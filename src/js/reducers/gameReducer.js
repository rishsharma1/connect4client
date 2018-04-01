import { combineReducers } from "redux"

import {
    SET_GAME_UPDATE,
    SET_GAME_UPDATE_LOADING,
    SET_GAME_UPDATE_KEY,
    SET_GAME_UPDATE_TURN,
    SET_GAME_FOUND,
    SET_WAITING_FOR_MOVE,
    SET_INVALID_TURN,
    SET_GAME_STATE,
    SET_GAME_WINNER
} from '../actions/gameActions'

function game(state=Array(42).fill(null),action) {

    switch(action.type) {
        
        case SET_GAME_UPDATE:
            return action.game
    }

    return state
}

function key(state='',action) {

    switch(action.type) {
        
        case SET_GAME_UPDATE_KEY:
            return action.key
    }
    return state
}

function turn(state='',action) {

    switch(action.type) {

        case SET_GAME_UPDATE_TURN:
            return action.turn
        
    }
    return state
}

function loading(state=false,action) {

    switch(action.type) {

        case SET_GAME_UPDATE_LOADING:
            return action.loading
    }

    return state 
}

function gameFound(state=false,action) {

    switch(action.type) {

        case SET_GAME_FOUND:
            return action.gameFound
    }

    return state
}

function waitingForMove(state=false,action) {

    switch(action.type) {

        case SET_WAITING_FOR_MOVE:
            return action.waitingForMove
    }

    return state
}

function invalidTurn(state=false,action) {

    switch(action.type) {

        case SET_INVALID_TURN:
            return action.invalidTurn
    }
    
    return state
}


function gameState(state='',action) {

    switch(action.type) {

        case SET_GAME_STATE:
            return action.gameState
    }

    return state
}

function winner(state='',action) {

    switch(action.type) {

        case SET_GAME_WINNER:
            return action.winner
    }

    return state
}

export default combineReducers({
    game,
    loading,
    key,
    turn,
    gameFound,
    waitingForMove,
    invalidTurn,
    gameState,
    winner
})