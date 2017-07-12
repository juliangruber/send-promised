
# send-promised

[![development sponsored by voltra.co](https://img.shields.io/badge/development%20sponsored%20by-Voltra.co-yellow.svg)](https://voltra.co/)

Handy promise wrapper for the [send](https://www.npmjs.com/package/send) static file server.

## Usage

`send-promised` returns whether a request could be handled by static file serving, so you can
use it as the first part of your http handler function.

```js
const send = require('send-promised')
const http = require('http')

const serve = send({
  root: `${__dirname}/static` // and other options for `send`
})

http.createServer(async (req, res) => {
  const served = await serve(req, res)
  if (served) return

  // handle other routes
})
```

## Installation

```bash
$ npm install send-promised
```

## License

MIT
