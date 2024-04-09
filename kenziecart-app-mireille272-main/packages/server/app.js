import 'dotenv/config'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import {keys} from './config/keys.js'
import router from './routes/index.js'
import requestLogger  from './middleware/requestLogger.js'
import seedDatabase from './seedDatabase.js'
import {errorHandler} from "./middleware/errorHandler.js"
import { database } from './config/keys.js'
import createError from 'http-errors'
import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta?.url)
// const __dirname = path.dirname(__filename)
mongoose.connect(`mongodb+srv://mireillemua:xPA7YyWb1LkqaLxK@cluster0.c19eumg.mongodb.net/Kenziecart?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

mongoose.connection.on('connected', () => {
  console.log('connected to mongoDB')
  seedDatabase()
})

mongoose.connection.on('error', (err) => {
  console.log('err connecting', err)
})

const app = express()

// middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))
app.use(requestLogger)

// api router
app.use(`/${keys.apiEndpoint}`, router)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'NotFound'))
})

// error handler
app.use(errorHandler)
app.listen(3001,() => console.log("Hello listening on port 3001"))

export default app
