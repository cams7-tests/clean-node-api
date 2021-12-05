const env = require('./config/env')
const MongoHelper = require('../infra/helpers/mongo-helper')

MongoHelper.connect(env.mongoUrl).then(() => {
  const app = require('./config/app')
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
