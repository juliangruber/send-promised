'use strict'

const send = require('send')
const { parse } = require('url')

module.exports = opts => (req, res) =>
  new Promise((resolve, reject) => {
    send(req, parse(req.url).pathname, opts)
      .on('error', err => {
        if (err.code !== 'ENOENT') return reject(err)
        resolve(false)
      })
      .on('end', () => resolve(true))
      .pipe(res)
  })
