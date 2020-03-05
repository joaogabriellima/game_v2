const fastify = require('fastify')()
const path = require('path')

const PORT = process.env.PORT || 8080

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
})

fastify.get('/healthz', () => ({ ok: true }))

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html')
})

fastify.listen(PORT, '0.0.0.0', err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Game: running at ${fastify.server.address().port}`)
})
