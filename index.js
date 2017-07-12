'use strict'

const send = require('send')

module.exports = opts => (req, res) =>
  new Promise((resolve, reject) => {
    send(req, req.url, opts)
      .on('error', err => {
        if (err.code !== 'ENOENT') return reject(err)
        resolve(false)
      })
      .on('end', () => resolve(true))
      .pipe(res)
  })
