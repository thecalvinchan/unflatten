import unflatten from './index.js'

const flattenedObj = {
  'a.b.c.d.e.f.g': 1,
  'a.b.c.d.e.f.h': 1,
  'a.b.c.d.e.f.i': 1,
  'a.b.c.d.e.f.j': 1,
  'a.b.c.d.e.f.k': 1,
  'a.b.c.d.e.f.l': 1,
  'a.b.c.d.e.f.m': 1,
  'a.b.c.d.e.f.n': 1,
  'a.b.c.d.e.f.o': 1,
  'a.b.c.d.e.f.p': 1,
}

test('unflattens obj', () => {

  const obj = unflatten('.')({})(flattenedObj)
  console.log(obj.a)
  expect(obj.a.b.c.d.e.f).toBeDefined()
})
