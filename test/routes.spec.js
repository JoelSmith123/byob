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
  describe('/api/v1/cities', () => {
    it('GET array all cities', (done) => {
      chai.request(server)
      .get('/api/v1.cities')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body[0].should.have.property('name')
        response.body[0].name.should.equal('New York City')
        response.body[0].should.have.property('state')
        response.body[0].state.should.equal('NY')
        response.body[0].should.have.property('population')
        response.body[0].population.should.equal(8622698)
        response.body[0].should.have.property('capital')
        response.body[0].capital.should.equal(false)
        done()
      })
    })

    it('POST a city to the cities array', (done) => {
      chai.request(server)
      .post('/api/v1/cities')
      .send({
        name: 'Hogsmeade',
        state: 'n/a',
        population: 2000,
        capital: false
      })
      .end((error, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('Hogsmeade')
        response.body.should.have.property('state')
        response.body.state.should.equal('n/a')
        response.body.should.have.property('population')
        response.body.population.should.equal(2000)
        response.body.should.have.property('capital')
        response.body.capital.should.equal(false)
        done()
      })
    })
  })
})