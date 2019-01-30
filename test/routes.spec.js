const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server.js')
const configuration = require("../knexfile")["test"];
const database = require("knex")(configuration);

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

  before(done => {
    database.migrate.latest()
     .then(() => done())
  })
  
  beforeEach(done => {
   database.migrate.rollback()
     .then(() => database.migrate.latest())
     .then(() => database.seed.run())
     .then(() => done())
  })

  describe('/api/v1/cities', () => {

    before(done => {
      database.migrate.latest()
       .then(() => done())
    })

    beforeEach(done => {
     database.migrate.rollback()
       .then(() => database.migrate.latest())
       .then(() => database.seed.run())
       .then(() => done())
    })

    it('GET array all cities', (done) => {
      chai.request(server)
      .get('/api/v1/cities')
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

    it('POST sad: fail to add city to the cities array', (done) => {
      chai.request(server)
      .post('/api/v1/cities')
      .send({
        name: 'London',
        state: 'n/a'
      })
      .end((error, response) => {
        response.should.have.status(422)
        response.should.be.json
        response.body.should.have.property('error')
        done()
      })
    }) 
  })

  describe('/api/v1/cities/:id', () => {

    before(done => {
      database.migrate.latest()
       .then(() => done())
    })

    beforeEach(done => {
     database.migrate.rollback()
       .then(() => database.migrate.latest())
       .then(() => database.seed.run())
       .then(() => done())
    })

    it('GET a city by id', (done) => {
      chai.request(server)
      .get('/api/v1/cities/2')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('object')
        done()
      })
    })

    it('PUT a city by id', (done) => {
      chai.request(server)
      .put('/api/v1/cities/1')
      .send({
        name: 'Hogsmeade'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('Hogsmeade')
        response.body.should.have.property('state')
        response.body.state.should.equal('NY')
        response.body.should.have.property('population')
        response.body.population.should.equal(8622698)
        response.body.should.have.property('capital')
        response.body.capital.should.equal(false)
        done()      
      })
    })

    it('DELETE a city by id', (done) => {
      chai.request(server)
      .delete('/api/v1/cities/24')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        done()
      })
    })
  })

  describe('/api/v1/restaurants', () => {

    before(done => {
      database.migrate.latest()
       .then(() => done())
    })

    beforeEach(done => {
     database.migrate.rollback()
       .then(() => database.migrate.latest())
       .then(() => database.seed.run())
       .then(() => done())
    })

    it('GET array all restaurants', (done) => {
      chai.request(server)
      .get('/api/v1/restaurants')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body[0].should.have.property('name')
        response.body[0].name.should.equal('Los Tacos No. 1')
        response.body[0].should.have.property('address')
        response.body[0].address.should.equal('Chelsea Market, 75 9th Avenue, New York 10011')
        response.body[0].should.have.property('city')
        response.body[0].city.should.equal('New York City')
        response.body[0].should.have.property('rating')
        response.body[0].rating.should.equal(4)
        response.body[0].should.have.property('avg_cost')
        response.body[0].avg_cost.should.equal('$25')
        done()
      })
    })

    it('POST a restaurant to the restaurants array', (done) => {
      chai.request(server)
      .post('/api/v1/cities/23/restaurants')
      .send({
        name: 'Lotsa Tacos',
        address: '123 Another Street',
        city: 'Hogsmeade',
        rating: 1.1,
        avg_cost: '$100'
      })
      .end((error, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('Lotsa Tacos')
        response.body.should.have.property('address')
        response.body.property.should.equal('123 Another Street')
        response.body.should.have.property('city')
        response.body.city.should.equal('Hogsmeade')
        response.body.should.have.property('rating')
        response.body.rating.should.equal(1.1)
        response.body.should.have.property('avg_cost')
        response.body.avg_cost.should.equal('$100')
        done()
      })
    })

    it('POST sad: fail to add restaurant to the restaurants array', (done) => {
      chai.request(server)
      .post('/api/v1/students')
      .send({
        name: 'All The Tacos',
        address: '345 Yet Another Street'
      })
      .end((error, response) => {
        response.should.have.status(422)
        response.should.be.json
        response.body.should.have.property('error')
        done()
      })
    })
  })

  describe('/api/v1/restaurants/:id', () => {

    before(done => {
      database.migrate.latest()
       .then(() => done())
    })

    beforeEach(done => {
     database.migrate.rollback()
       .then(() => database.migrate.latest())
       .then(() => database.seed.run())
       .then(() => done())
    })

    it('GET a restaurant by id', (done) => {
      chai.request(server)
      .get('/api/v1/restaurants/1')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('Los Tacos No. 1')
        response.body.should.have.property('address')
        response.body.property.should.equal('Chelsea Market, 75 9th Avenue, New York 10011')
        response.body.should.have.property('city')
        response.body.city.should.equal('New York City')
        response.body.should.have.property('rating')
        response.body.rating.should.equal(4.4)
        response.body.should.have.property('avg_cost')
        response.body.avg_cost.should.equal('$25')
        done()
      })
    })

    it('PUT a restaurant by id', (done) => {
      chai.request(server)
      .put('/api/v1/restaurants/1')
      .send({
        name: 'All The Tacos'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('All The Tacos')
        response.body.should.have.property('address')
        response.body.property.should.equal('Chelsea Market, 75 9th Avenue, New York 10011')
        response.body.should.have.property('city')
        response.body.city.should.equal('New York City')
        response.body.should.have.property('rating')
        response.body.rating.should.equal(4.4)
        response.body.should.have.property('avg_cost')
        response.body.avg_cost.should.equal('$25')
        done()
      })
    })

    it('DELETE a restaurant by id', (done) => {
      chai.request(server)
      .delete('/api/v1/restaurants/1')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('id')
        response.body.id.should.equal(1)
        done()
      })
    })
  })

  describe('/api/v1/cities/:id/restaurants', () => {

    before(done => {
      database.migrate.latest()
       .then(() => done())
    })

    beforeEach(done => {
     database.migrate.rollback()
       .then(() => database.migrate.latest())
       .then(() => database.seed.run())
       .then(() => done())
    })

    it('GET restaurants from a specific city by id', (done) => {
      chai.request(server)
      .get('/api/v1/cities/23/restaurants')
      .end((error, response) => {
        response.should.have.status(200)
        response.should.be.json
        response.body.should.be.a('array')
        response.body[0].should.have.property('name')
        response.body[0].name.should.equal('Los Tacos No. 1')
        response.body[0].should.have.property('address')
        response.body[0].property.should.equal('Chelsea Market, 75 9th Avenue, New York 10011')
        response.body[0].should.have.property('city')
        response.body[0].city.should.equal('New York City')
        response.body[0].should.have.property('rating')
        response.body[0].rating.should.equal(4.4)
        response.body[0].should.have.property('avg_cost')
        response.body[0].avg_cost.should.equal('$25')
        done()
      })
    })

    it('POST restaurant to the restaurants array of a specific city by id', (done) => {
      chai.request(server)
      .post('/api/v1/cities/23/restaurants')
      .send({
        name: 'Lotsa Tacos',
        address: '123 Another Street',
        city: 'Hogsmeade',
        rating: 1.1,
        avg_cost: '$100'
      })
      .end((error, response) => {
        response.should.have.status(201)
        response.should.be.json
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.name.should.equal('Lotsa Tacos')
        response.body.should.have.property('address')
        response.body.property.should.equal('123 Another Street')
        response.body.should.have.property('city')
        response.body.city.should.equal('Hogsmeade')
        response.body.should.have.property('rating')
        response.body.rating.should.equal(1.1)
        response.body.should.have.property('avg_cost')
        response.body.avg_cost.should.equal('$100')
        done()
      })
    })

    it('POST sad: fail to add restaurant to the restaurants array of a specific city by id', (done) => {
      chai.request(server)
      .post('/api/v1/cities/1/restaurants')
      .send({
        name: 'All The Tacos',
        address: '345 Yet Another Street'
      })
      .end((error, response) => {
        response.should.have.status(422)
        response.should.be.json
        response.body.should.have.property('error')
        done()
      })
    })
  })
})