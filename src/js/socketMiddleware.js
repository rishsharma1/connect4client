import * as socketActions from './actions/socketActions'
import * as gameActions from './actions/gameActions'
//var ws = new WebSocket("ws://localhost:1200/ws")

const UPDATE_MESSAGE = "UPDATE_MESSAGE"
const CONNECT = "CONNECT"
const DISCONNECT = "DISCONNECT"
const SEND_MESSAGE = "SEND_MESSAGE"

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
                console.log("UPDATE MESSAGE GOT IT")
                store.dispatch(gameActions.setGameUpdate(msg["og"]["OGame"]["Board"]))
                store.dispatch(gameActions.setGameKeyUpdate(msg["og"]["GameKey"]))
                store.dispatch(gameActions.setGameTurnUpdate(msg["og"]["CurrentTurn"]))
                //console.log(store.getState())
                // send a message to update the game 
                console.log(store.getState()["game"]["turn"])
                if(store.getState()["game"]["turn"] != store.getState()["user"]["userName"]) {
                    var userName = store.getState()["user"]["userName"]
                    var key = store.getState()["game"]["key"]
                    store.dispatch(socketActions.sendMessage({"Action": "UPDATE_REQUEST", "Content": {"UserName": userName, "GameKey": key}}))
                }
                
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