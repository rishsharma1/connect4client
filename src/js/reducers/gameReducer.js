import { combineReducers } from "redux"

import {
    SET_GAME_UPDATE,
    SET_GAME_UPDATE_LOADING
} from '../actions/gameActions'

function game(state=Array(42).fill(null),action) {

    switch(action.type) {
        
        case SET_GAME_UPDATE:
            return action.game
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
    loading
})