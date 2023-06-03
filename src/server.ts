import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/Logger'

async function main() {
  try {
    await mongoose.connect(config.Database_url as string)

    app.listen(config.port, () => {
      logger.info(`database conection Done and Listen port ${config.port}`)
    })
  } catch (err) {
    logger.error('databse conection problem', err)
  }
}
main()
