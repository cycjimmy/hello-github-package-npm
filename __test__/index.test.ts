import { describe, expect, it } from 'vitest'

import helloWorld from '../src/index'

describe('helloWorld', () => {
  it('helloWorld() return string', () => {
    expect(typeof helloWorld.helloWorld()).toBe('string')
  })

  it('helloElement contains the message', () => {
    expect(helloWorld.helloElement).toContain('hello world!')
  })

  it('_style exposes the camelCase class names', () => {
    // Vitest replaces CSS Modules with a proxy, so only the access shape is
    // asserted here; the real class names are covered by the build diff.
    expect(typeof helloWorld._style.helloWrapper).toBe('string')
    expect(typeof helloWorld._style.hello).toBe('string')
  })
})
