import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globelErrorHandlers from './app/middelware/globelErrorHandlers'
import { UserRoutes } from './app/modules/user/user.router'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/user', UserRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.send('hello World University managnent')
})

// Global Error Handel ...........................................
app.use(globelErrorHandlers)

export default app
