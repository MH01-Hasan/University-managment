import express, { Application, Request, Response } from 'express'
// import createduser from './app/modules/user/user.service'
import cors from 'cors'
import userRoute from './app/modules/user/user.router'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/user', userRoute)

app.get('/', async (req: Request, res: Response) => {
  res.send('hello World University managnent')
})

export default app
