import { combineReducers } from "redux"

import {
    SET_GAME_UPDATE,
    SET_GAME_UPDATE_LOADING,
    SET_GAME_UPDATE_KEY,
    SET_GAME_UPDATE_TURN
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

export default combineReducers({
    game,
    loading,
    key,
    turn
})