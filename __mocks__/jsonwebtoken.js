module.exports = {
  token: 'any_token',
  sign (payload, secretOrPrivateKey) {
    return this.token
  }
}
