const hexor = require('./hexor');

describe('Hexor', () => {
  it('Shoud calculate hex value of rgb', () => {
    const result = hexor(32, 64, 128);
    expect(result).toBe('#204080')
  })

  it('Shoud allways returns 7length string', () => {
    const result = hexor(32, 0, 128);
    expect(result).toBe('#200080')
  })

  it('Shoud clamp input between 0 and 255', () => {
    const result = hexor(257, 512, -1024);
    expect(result).toBe('#ffff00')
  })
})

