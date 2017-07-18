'use strict'

const send = require('send')
const { parse } = require('url')

module.exports = opts => (req, res, _opts = {}) =>
  new Promise((resolve, reject) => {
    send(req, parse(req.url).pathname, Object.assign({}, opts, _opts))
      .on('error', err => {
        if (err.code !== 'ENOENT') return reject(err)
        resolve(false)
      })
      .on('end', () => resolve(true))
      .pipe(res)
  })
