const MongoHelper = require('./mongo-helper')

describe('MongoHelper', () => {
  test('Should has null db when client is disconnected', async () => {
    const sut = MongoHelper
    expect(sut.db).toBeFalsy()
    await sut.connect(global.__MONGO_URI__)
    expect(sut.db).toBeTruthy()
    await sut.disconnect()
    expect(sut.db).toBeFalsy()
  })
})
