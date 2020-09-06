const cors = require('cors')
const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const backendDocs = require('./backend/api.json')
const port = process.env.PORT || 8282

app.use(cors())
app.use('/api-docs/backend', swaggerUI.serve, swaggerUI.setup(backendDocs));
app.use('/api-docs/frontend', express.static('frontend'))

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`)
})