import http from 'http'

import app from './app.js'
import { init } from './socket.js'

const server = http.createServer(app)
init(server)
const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}/`)
})
