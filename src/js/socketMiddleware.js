import * as actions from './actions/gameActions'
//var ws = new WebSocket("ws://localhost:1200/ws")

const UPDATE_MESSAGE = "UPDATE_MESSAGE"
const CONNECT = "CONNECT"
const DISCONNECT = "DISCONNECT"
const SEND_MESSAGE = "SEND_MESSAGE"

const socketMiddleware = (function() {

    var socket = null
    
    const onOpen = (ws,store,token) => evt => {
        store.dispatch(actions.connected(true))
    }

    const onClose = (ws,store) => evt => {
        store.dispatch(actions.connected(false));
    }

    const onMessage = (ws,store) => evt => {
        var msg = JSON.parse(evt.data)
        switch(msg.type) {

            case UPDATE_MESSAGE:
                store.dispatch(actions.messageReceived(msg))
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
                store.dispatch(actions.connecting(true))

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
                store.dispatch(actions.connected(false))
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