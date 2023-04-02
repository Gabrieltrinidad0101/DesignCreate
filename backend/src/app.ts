import express from 'express'
import { authRouter } from './mooc/authentication/infranstructure/authRouter'
import cors from 'cors'
import morgan from 'morgan'
import './database'
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/', authRouter)
export default app
