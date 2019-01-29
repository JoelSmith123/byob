const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server.js')

chai.use(chaiHttp)

describe('Client Routes', () => {
  it('should return a 404 for routes that don\'t exist', (done) => {
    chai.request(server)
    .get('/sad')
    .end((error, response) => {
      response.should.have.status(404)
      done()
    })
  })
})

describe('API Routes', () => {
  
})