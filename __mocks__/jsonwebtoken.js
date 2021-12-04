module.exports = {
  token: 'any_token',
  sign (payload, secretOrPrivateKey) {
    this.payload = payload
    this.secretOrPrivateKey = secretOrPrivateKey
    return this.token
  }
}
