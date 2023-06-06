import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IgenericErrormessage } from '../../interface/error'
import handelValidationError from '../../error/handelValidationError'
import { error } from 'winston'
import ApiError from '../../error/ApiError'
import { Error } from 'mongoose'

const globelErrorHandlers = (
  err: Error.ValidationError, // Quick fixed ar moddome tik korce ai khane just err chilo
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 5000
  let message = 'Something Went Wrong !'
  let errorMessage: IgenericErrormessage[] = []

  if (err.name === 'ValidationError') {
    const simplyerror = handelValidationError(err)
    ;(statusCode = simplyerror.statusCode),
      (message = simplyerror.message),
      (errorMessage = simplyerror.errorMessage)
  } else if (error instanceof ApiError) {
    ;(statusCode = error?.statusCode),
      (message = error?.message),
      (errorMessage = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : [])
  } else if (error instanceof Error) {
    ;(message = error?.message),
      (errorMessage = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : [])
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.evn !== 'production' ? err?.stack : undefined,
  })

  next()
}

export default globelErrorHandlers
