import app from '../src/app'
import request from 'supertest'

describe('POST /authentication', () => {
  test('authentication register with error', async () => {
    const response = await request(app).post('/authentication').send({
      password: '12345',
      isRegister: true
    })
    expect(response.statusCode).toBe(500)
  })

  test('authentication login with error', async () => {
    const response = await request(app).post('/authentication').send({
      password: '12345',
      isRegister: false
    })
    expect(response.statusCode).toBe(500)
  })

  test('authentication register', async () => {
    const response = await request(app).post('/authentication').send({
      name: 'juan',
      password: '12345',
      isRegister: true
    })
    expect(response.statusCode).toBe(200)
  })

  test('authentication register user exist', async () => {
    const response = await request(app).post('/authentication').send({
      name: 'juan',
      password: '12345',
      isRegister: true
    })
    expect(response.statusCode).toBe(409)
  })

  test('authentication login user exist', async () => {
    const response = await request(app).post('/authentication').send({
      name: 'juan',
      password: '12345',
      isRegister: false
    })
    expect(response.statusCode).toBe(200)
  })
})
