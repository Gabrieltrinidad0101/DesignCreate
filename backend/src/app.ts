import * as dotenv from 'dotenv'
import express from 'express'
import { authRouter } from './mooc/authentication/infranstructure/authRouter'
import { designRouter } from './mooc/desing/infranstructure/designRouter'
import cors from 'cors'
import morgan from 'morgan'
import './database'
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors({ origin: '*' }))
app.use(morgan('dev'))
app.use('/', authRouter)
app.use('/design', designRouter)
export default app
