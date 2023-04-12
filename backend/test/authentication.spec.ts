import app from '../src/app'
import request from 'supertest'

let token = ''

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
    expect(response.body.message).toBeTruthy()
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
    token = response.body.message
    expect(response.body.message).toBeTruthy()
  })

  test('authentication verify token', async () => {
    const response = await request(app).get('/verifyAuthentication')
      .set({ token })
      .send()
    expect(response.body.message._id).toBeTruthy()
    expect(response.body.message.name).toBe('juan')
  })
})
