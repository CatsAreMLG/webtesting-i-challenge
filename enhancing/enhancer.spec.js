const { succeed, fail, repair, get } = require('./enhancer.js')

describe('enhancer modules', () => {
  const result = repair({ name: 'long sword', durability: 0, enchantment: 0 })
  it('repair tester', () => {
    expect(result.durability).toBe(100)
  })
})
