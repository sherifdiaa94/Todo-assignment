const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
const assert = require('assert')



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
    
      it('Testing GET todos API', async done => {
        const todoList=[
          {id:0,
            item:"Study",
            completed:"false"},
            {id:1,
            item:"Walk",
            completed:"false"},
            {id:2,
            item:"Work",
            completed:"false"}
        ];
        
        const response = await request.get('/todoApp/api/todos')
        .set({
          "x-Gateway-ApiKey": "123",
          "csrf-token": "421"
          }
        )
        expect(response.status).toBe(200)
        expect(response.body).toEqual(todoList)
        done()
        })  

        it('Testing GET todos API without headers', async done => {
          const todoList=[
            {id:0,
              item:"Study",
              completed:"false"},
              {id:1,
              item:"Walk",
              completed:"false"},
              {id:2,
              item:"Work",
              completed:"false"}
          ];
          
          const response = await request.get('/todoApp/api/todos')
          
          expect(response.status).toBe(404)
          expect(response.body.Headers).toBe("Not found")
          done()
          }) 
         
    
  })
