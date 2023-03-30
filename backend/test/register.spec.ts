import app from '../src/app'
import request from 'supertest'

describe('POST /register', () => {
  test('register with error', async () => {
    const response = await request(app).post('/register').send({
      password: '12345'
    })
    expect(response.statusCode).toBe(500)
  })

  test('register', async () => {
    const response = await request(app).post('/register').send({
      name: 'juan',
      password: '12345'
    })
    expect(response.statusCode).toBe(200)
  })

  test('register user exist', async () => {
    const response = await request(app).post('/register').send({
      name: 'juan',
      password: '12345'
    })
    expect(response.statusCode).toBe(409)
  })
})
