const cors = require('cors')
const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const backendDocs = require('./backend/api.json')
const port = process.env.PORT || 8282

app.use(cors())
app.use('/docs/backend', swaggerUI.serve, swaggerUI.setup(backendDocs));
app.use('/docs/frontend', express.static('frontend'))
app.route('/').get((req, res, next) => {
  res.sendFile([__dirname, 'index.html'].join('/'))
})

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`)
})