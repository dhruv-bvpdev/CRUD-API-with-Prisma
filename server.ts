import express, { Express } from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
dotenv.config()

const app: Express = express()

const prisma = new PrismaClient()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import testRoute from './routes/productRoutes'

app.get('/', (req, res) => {
  res.send({ message: 'Everything Works' })
})

app.use('/api/products', testRoute)

const PORT: any = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server started in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
})

export default prisma
