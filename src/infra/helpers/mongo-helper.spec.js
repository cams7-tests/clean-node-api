const MongoHelper = require('./mongo-helper')

describe('MongoHelper', () => {
  test('Should has null db when client is disconnected', async () => {
    const sut = MongoHelper
    expect(sut.db).toBeFalsy()
    await sut.connect(process.env.MONGO_URL)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
  })
})
