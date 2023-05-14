import express from 'express'
import { authRouter } from './mooc/authentication/infranstructure/authRouter'
import { designRouter } from './mooc/desing/infranstructure/designRouter'
import cors from 'cors'
import morgan from 'morgan'
import './database'
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(cors({ origin: '*' }))
app.use(morgan('dev'))
app.use('/', authRouter)
app.use('/design', designRouter)
export default app
