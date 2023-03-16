import express from 'express'
import {emit} from './socket.js'
import handlebars from 'express-handlebars'
import viewsRouter from './src/routes/views.router.js'
import __dirname from './utils.js'
const app = express()
app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/src/views');
app.set('view engine','handlebars');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname+'/public'))


app.use('/',viewsRouter);

app.post('/send-message', (req, res) => {
  const { body: { fullname, message } } = req
  emit({ fullname, message })
  res.status(200).end()
})

export default app
