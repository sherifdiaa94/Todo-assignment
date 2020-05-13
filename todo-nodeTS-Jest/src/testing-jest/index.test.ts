const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)





it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

  describe('Testing Node App', () => {
    it('Testing Health API', async done => {
      const response = await request.get('/todoApp/api/health')
      expect(response.status).toBe(200)
      expect(response.body.status).toBe('Node server is up and running on port 81')
      done()
      })  
  })
