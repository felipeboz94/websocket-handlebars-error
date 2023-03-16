import { Server } from 'socket.io'

let io

let messages = [
  {
    fullname: 'Coder House',
    message: 'Bienvenidos'
  },
]

export const init = (httpServer) => {
  io = new Server(httpServer)

  io.on('connection', (socketClient) => {
    console.log('Nuevo cliente conectado', socketClient.id)
    socketClient.emit('history-messages', messages)

    socketClient.on('new-message', (data) => {
      messages.push(data)
      io.emit('notification', data)
    })
    socketClient.on('disconection', () => {
      console.log('Se desconecto el cliente con el id', socketClient.id)
    })
  })

}

export const emit = (message) => {
  io.emit('notification', message)
}