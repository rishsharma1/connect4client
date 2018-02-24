import { combineReducers } from "redux"

import {
    SET_USER_NAME
} from '../actions/userActions'



function userName(state = '', action) {

    switch (action.type) {

        case SET_USER_NAME:
            return action.name
    }

    return state
}

export default combineReducers({
    userName
})