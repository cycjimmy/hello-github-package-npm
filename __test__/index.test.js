import helloWorld from '../src/index'

describe('helloWorld', () => {
  it('helloWorld() return string', () => {
    expect(typeof helloWorld.helloWorld()).toBe('string')
  })
})
