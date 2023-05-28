import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.Database_url as string)

    app.listen(config.port, () => {
      console.log(`database conection Done and Listen port ${config.port}`)
    })
  } catch (err) {
    console.log('databse conection problem', err)
  }
}
main()
