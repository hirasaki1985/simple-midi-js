import { hello } from '../src/index'

beforeAll(async () => {
  console.log('beforeAll')
})

test('api controller UserController: forgot password', async () => {
  console.log('test: api controller UserController forgot password')
  expect(hello('your name')).toBe('Hello, your name!')
})
