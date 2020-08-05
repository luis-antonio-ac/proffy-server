import express from 'express'
import { db } from './database/connection'

const app = express()

app.use(express.json())

app.listen(3333)
