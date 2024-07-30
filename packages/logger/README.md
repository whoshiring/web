# Job Search Application Logger

A flexible and powerful logging package designed for use in job search applications. This package provides a consistent logging interface that can be used across different parts of your application, including frontend, API, and other services.

## Features

- Flexible configuration options
- Support for multiple log levels
- Customizable log formats and transports
- TypeScript support
- Based on the robust Winston logging library

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @your-org/job-search-logger
```

Or if you're using Yarn:

```bash
yarn add @your-org/job-search-logger
```

## Usage

Here's a basic example of how to use the logger:

```typescript
import { createLogger, LogLevel } from '@your-org/job-search-logger';

const logger = createLogger({
  level: LogLevel.INFO,
  defaultMeta: { service: 'user-service' }
});

logger.info('User logged in', { userId: '123' });
```

### Configuration

The `createLogger` function accepts a configuration object with the following options:

- `level`: The minimum log level to record (default: 'info')
- `format`: Custom Winston format (optional)
- `transports`: Custom Winston transports (optional)
- `silent`: Boolean to disable logging (optional)
- `defaultMeta`: Default metadata to include with all logs (optional)

### Log Levels

The package supports the following log levels:

- ERROR
- WARN
- INFO
- HTTP
- VERBOSE
- DEBUG
- SILLY

### Metadata

You can include additional metadata with your logs:

```typescript
logger.error('Failed to process job application', {
  userId: '123',
  jobId: 'job456',
  error: 'Invalid resume format'
});
```

## Advanced Usage

### Custom Transports

You can configure custom transports for different environments:

```typescript
import { createLogger, LogLevel } from '@your-org/job-search-logger';
import { transports } from 'winston';

const logger = createLogger({
  level: LogLevel.DEBUG,
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});
```

### Usage in Frontend

For frontend logging, you might want to use a custom transport that sends logs to your backend API:

```typescript
import { createLogger, LogLevel } from '@your-org/job-search-logger';

const apiTransport = // ... custom transport that sends logs to your API

const logger = createLogger({
  level: LogLevel.WARN,
  transports: [apiTransport]
});
```

## Contributing

We welcome contributions to this package. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
