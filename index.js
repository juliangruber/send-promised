'use strict'

const send = require('send')
const { parse } = require('url')

const serve = (req, res, opts = {}) => {
  if (!res) {
    opts = req
    return (req, res, _opts) => serve(req, res, Object.assign({}, opts, _opts))
  }

  return new Promise((resolve, reject) => {
    send(req, parse(req.url).pathname, opts)
      .on('error', err => {
        if (err.code !== 'ENOENT') return reject(err)
        resolve(false)
      })
      .on('end', () => resolve(true))
      .pipe(res)
  })
}

module.exports = serve
