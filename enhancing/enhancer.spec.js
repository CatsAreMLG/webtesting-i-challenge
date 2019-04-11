const { succeed, fail, repair, get } = require('./enhancer.js')

describe('Asynchronous tests', () => {
  const result = succeed('h')
  it('async using callback', () => {
    expect(result).toBe('hi')
  })
})
