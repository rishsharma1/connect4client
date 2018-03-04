import { combineReducers } from "redux"

import {
    SET_USER_NAME,
    SET_USER_COLOR
} from '../actions/userActions'



function userName(state = '', action) {

    switch (action.type) {

        case SET_USER_NAME:
            return action.name
    }

    return state
}

function playerColor(state = '',action) {

    switch(action.type) {
        
        case SET_USER_COLOR:
            return action.color
    }
    return state
}

export default combineReducers({
    userName,
    playerColor
})