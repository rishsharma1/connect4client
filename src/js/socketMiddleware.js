import * as socketActions from './actions/socketActions'
import * as gameActions from './actions/gameActions'
import * as userActions from './actions/userActions'

const UPDATE_MESSAGE = "UPDATE_MESSAGE"
const CONNECT = "CONNECT"
const DISCONNECT = "DISCONNECT"
const SEND_MESSAGE = "SEND_MESSAGE"
const INVALID_MOVE_MESSAGE = "INVALID_MOVE"
const UPDATE_REQUEST = "UPDATE_REQUEST"

function handleUpdateMessage(msg, store) {

    var userName = store.getState()["user"]["userName"]

    var board = msg["og"]["OGame"]["Board"]
    var gameKey = msg["og"]["GameKey"]
    var currentTurn = msg["og"]["CurrentTurn"]
    var playerColor = msg["og"]["PlayerColors"][userName]
    var gameState = msg["og"]["GameState"]
    var winner = msg["og"]["Winner"]
    var moves = msg["og"]["Moves"]

    store.dispatch(gameActions.setGameUpdate(board))
    store.dispatch(gameActions.setGameKeyUpdate(gameKey))
    store.dispatch(gameActions.setGameTurnUpdate(currentTurn))
    store.dispatch(userActions.setPlayerColor(playerColor))
    store.dispatch(gameActions.setGameState(gameState))
    store.dispatch(gameActions.setGameWinner(winner))
    store.dispatch(gameActions.setGameFound(true))
    store.dispatch(gameActions.setGameMoves(moves))

    if(currentTurn != userName) {
        var key = store.getState()["game"]["key"]
        var msg = {
            "Action": UPDATE_REQUEST,
            "Content": {
                "UserName": userName,
                "GameKey": key
            }
        }
        store.dispatch(socketActions.sendMessage(msg))
        store.dispatch(gameActions.setWaitingForMove(true))
    }
    else {
        store.dispatch(gameActions.setWaitingForMove(false))
        store.dispatch(gameActions.setInvalidTurn(false))
    }
                

}

function handleInvalidMoveMessage(msg, store) {

    store.dispatch(gameActions.setInvalidMove(true))
}

const socketMiddleware = (function() {

    var socket = null
    
    const onOpen = (ws,store,token) => evt => {
        store.dispatch(socketActions.connected(true))
    }

    const onClose = (ws,store) => evt => {
        store.dispatch(socketActions.connected(false));
    }

    const onMessage = (ws,store) => evt => {
        var msg = JSON.parse(evt.data)
        console.log(msg)
        switch(msg.action) {

            case UPDATE_MESSAGE:
                handleUpdateMessage(msg,store)
                break
            case INVALID_MOVE_MESSAGE:
                handleInvalidMoveMessage(msg,store)
                break    
            default:
                console.log("Received unknown message type: '"+msg.type+"'")
                break
        }
    }

    return store => next => action => {

        switch(action.type) {
            case CONNECT:

                if (socket != null) {
                    socket.close()
                }
                store.dispatch(socketActions.connecting(true))

                socket = new WebSocket("ws://localhost:1200/ws")
                socket.onmessage = onMessage(socket,store)
                socket.onclose = onClose(socket,store)
                socket.onopen = onOpen(socket,store,action.token)
                break
            
            case DISCONNECT:
                if(socket != null) {
                    socket.close()
                }
                socket = null
                store.dispatch(socketActions.connected(false))
                break
            
            case SEND_MESSAGE:
                console.log(action)
                socket.send(JSON.stringify(action.msg))
                break
            
            default:
                return next(action)

        }
    }
})();

export default socketMiddleware