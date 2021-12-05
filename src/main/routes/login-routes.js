const { adapt } = require('../adapters/express-router-adapter')
const LoginRouterComposer = require('../composers/login-router-compose')

module.exports = router => {
  router.post('/login', adapt(LoginRouterComposer.compose()))
}
