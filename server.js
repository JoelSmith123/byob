const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use( bodyParser.json() )

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Taco Restaurants'


app.get('/api/v1/cities', (request, response) => {
  database('cities').select()
  .then(cities => {
    response.status(200).json(cities)
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.post('/api/v1/cities', (request, response) => {
  const city = request.body

  for (let requiredParameter of ['name', 'state', 'population']) {
    if (!city[requiredParameter]) {
      return response.status(422)
        .send({ error: `Expected format: { name: <String>, state: <String>,
                        population: <String>, capital: <Boolean> }.
                        You're missing a "${requiredParameter}" property.` })
    }
  }

  database('cities').insert(city, 'id')
  .then(city => {
    response.status(201).json({ ...request.body, id: city[0] })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.get('/api/v1/restaurants', (request, response) => {
  const rating = request.query.rating
  
  if (rating) {
    database('restaurants').where('rating', rating).select()
    .then(restaurants => {
      response.status(200).json(restaurants)
    })
    .catch(error => {
    response.status(500).json({ error })
  })
  } else {
    database('restaurants').select()
    .then(restaurants => {
      response.status(200).json(restaurants)
    })
    .catch(error => {
    response.status(500).json({ error })
  })
  }
  
})


app.get('/api/v1/cities/:id', (request, response) => {
  const { id } = request.params

  database('cities').where('id', id).select()
  .then(city => {
    if (city.length !== 0) {
     response.status(200).json(city) 
    } else {
      response.status(404).send({ 
        error: `City with id ${id} was not found in the database`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.put('/api/v1/cities/:id', (request, response) => {
  const { id } = request.params
  const city = request.body

  database('cities')
  .where('id', id)
  .update({
    name: city.name, 
    population: city.population, 
    state: city.state, 
    capital: city.capital
  })
  .then(city => {
    if (city === 1) {
      response.status(202).send({ 
        statusText: `City with id ${id} was successfully updated.`
      })
    } else {
      response.status(404).send({ error: `A city with id ${id} could not be found.` })
    }
  })
  .catch(error => {
    response.status(500).json({error})
  })
})


app.delete('/api/v1/cities/:id', (request, response) => {
  database('restaurants').where('city_id', request.params.id).del()
  .then(() => { 
    database('cities').where('id', request.params.id).del()
    .then((cityId) => {
      if (cityId) {
        response.sendStatus(204)
      } else {
        response.status(404).send('No city with that ID currently exists.')
      }
    })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.get('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params

  database('restaurants').where('id', id).select()
  .then(restaurant => {
    if (restaurant.length !== 0) {
     response.status(200).json(restaurant) 
    } else {
      response.status(404).send({ 
        error: `Restaurant with id ${id} was not found in the database.`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.put('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params
  const restaurant = request.body

  database('restaurants')
  .where('id', id)
  .update({
    name: restaurant.name, 
    address: restaurant.address, 
    city: restaurant.city, 
    rating: restaurant.rating, 
    avg_cost: restaurant.avg_cost 
  })
  .then(restaurant => {
    if (restaurant === 1) {
      response.status(202).send({ 
        sendStatus: `Restaurant with id ${id} was successfully updated.` 
      })
    } else {
      response.status(404).send(`Restaurant with id ${id} could not be found.`)
    }
  })
  .catch(error => {
    response.status(422).json({error})
  })
})


app.delete('/api/v1/restaurants/:id', (request, response) => {
  database('restaurants').where('id', request.params.id).del()
  .then(restaurantId => {
    if (restaurantId) {
      response.sendStatus(204)
    } else {
      response.status(404).send('No restaurant with that ID currently exists')
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.get('/api/v1/cities/:id/restaurants', (request, response) => {
  database('restaurants').where('city_id', request.params.id).select()
  .then((restaurants) => {
    if (restaurants.length) {
      response.status(200).json(restaurants)
    } else {
      response.status(404).send('No restaurants are listed for that city.')
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.post('/api/v1/cities/:id/restaurants', (request, response) => {
  const restaurant = request.body
  const { id } = request.params
  const fullRestaurant = {...restaurant, city_id: id}

  for (let requiredParameter of ['name', 'city', 'address', 'rating', 'avg_cost']) {
    if (!restaurant[requiredParameter]) {
      return response.status(422)
        .send({ error: `Expected format: { name: <String>, city: <String>,
                address: <String>, rating: <String>, avg_cost: <String> }. 
                You're missing a "${requiredParameter}" property.` })
    }
  }

  database('restaurants').insert(fullRestaurant, 'id')
  .then(restaurant => {
    response.status(201).json({ ...fullRestaurant, id: restaurant[0] })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`)
})

module.exports = app
