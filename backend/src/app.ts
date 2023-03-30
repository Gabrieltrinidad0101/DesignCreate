import express from 'express'
import { authRouter } from './mooc/authentication/infranstructure/authRouter'
import './database'
const app = express()

app.use(express.json())
app.use('/', authRouter)
export default app
