const loginRouter = require('../composers/login-router-compose')

module.exports = router => {
  router.post('/login', loginRouter)
}
