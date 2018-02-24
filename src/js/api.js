var ws = new WebSocket("ws://localhost:1200/ws")

function sendInitMessage(username) {
    var message = {
        "Action": "init",
        "Content": {"UserName": username}
    }
    ws.send(message)
    
}

export { sendInitMessage };