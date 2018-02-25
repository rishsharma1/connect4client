var ws = new WebSocket("ws://localhost:1200/ws")

export function sendInitMessage(username) {
    var message = {
        "Action": "init",
        "Content": {"UserName": username}
    }
    ws.send(JSON.stringify(message))
    
}
