import winston from 'winston'
import { CreateLogger } from './types'

export const createLogger: CreateLogger = config => {
  const logger = winston.createLogger({
    level: config.level,
    format: config.format,
    transports: config.transports,
    defaultMeta: config.defaultMeta,
    silent: config.silent,
  })

  const log: any = (level: string, message: string, meta: any) => {
    logger.log(level, message, meta)
  }

  return {
    log,
    error: (message: string, meta?: any) => log('error', message, meta),
    warn: (message: string, meta?: any) => log('warn', message, meta),
    info: (message: string, meta?: any) => log('info', message, meta),
    http: (message: string, meta?: any) => log('http', message, meta),
    verbose: (message: string, meta?: any) => log('verbose', message, meta),
    debug: (message: string, meta?: any) => log('debug', message, meta),
    silly: (message: string, meta?: any) => log('silly', message, meta),
  }
}
