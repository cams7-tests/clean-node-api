jest.mock('jsonwebtoken', () => ({
  token: 'any_token',
  sign (payload, secretOrPrivateKey) {
    this.payload = payload
    this.secretOrPrivateKey = secretOrPrivateKey
    return this.token
  }
}))

const TokenGenerator = require('./token-generator')
const jwt = require('jsonwebtoken')
const { MissingParamError } = require('../errors')

const makeSut = () => {
  return new TokenGenerator('secret')
}

describe('Token Generator', () => {
  test('Should return null if JWT returns null', async () => {
    jwt.token = null
    const sut = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBeNull()
  })

  test('Should return a token if JWT returns token', async () => {
    const sut = makeSut()
    const token = await sut.generate('any_id')
    expect(token).toBe(jwt.token)
  })

  test('Should call JWT with correct values', async () => {
    const sut = makeSut()
    await sut.generate('any_id')
    expect(jwt.payload).toEqual({ _id: 'any_id' })
    expect(jwt.secretOrPrivateKey).toBe(sut.secret)
  })

  test('Should throw if no secret is provided', async () => {
    const sut = new TokenGenerator()
    const promise = sut.generate('any_id')
    expect(promise).rejects.toThrow(new MissingParamError('secret'))
  })

  test('Should throw if no id is provided', async () => {
    const sut = makeSut()
    const promise = sut.generate()
    expect(promise).rejects.toThrow(new MissingParamError('id'))
  })
})
