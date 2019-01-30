const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use( bodyParser.json() )

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Taco Restaurants'



app.get('/api/v1/cities', (request, response) => {
  database('cities').select()
  .then((cities) => {
    response.status(200).json(cities);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
})

app.post('/api/v1/cities', (request, response) => {
  const project = request.body

  for (let requiredParameter of ['name, state, population, restaurants'] && typeof request.body.capital !== 'undefined') {
    if (!project[requiredParameter]) {
      return response.status(422)
        .send({ error: `Expected format: { name: <String>, state: <String>, population: <String>, capital: <Boolean>, 
                restaurants: <Array> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('cities').insert(city, 'id')
  .then(city => {
    response.status(201).json({ id: city[0] })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})



app.get('/api/v1/restaurants', (request, response) => {
  database('restaurants').select()
  .then((restaurants) => {
    response.status(200).json(restaurants);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
})



app.get('/api/v1/cities/:id', (request, response) => {
  const { id } = request.params

  database('cities').where('id', id).select()
  .then(city => response.status(200).json(city))
})


app.put('/api/v1/cities/:city_id', (request, response) => {

})


app.delete('/api/v1/cities/:id', (request, response) => {
  database('restaurants').where('city_id', request.params.id).del()
  database('cities').where('id', request.params.id).del()
})



app.get('/api/v1/restaurants/:id', (request, response) => {
  const { id } = request.params

  database('restaurants').where('id', id).select()
  .then(restaurant => response.status(200).json(restaurant))
})



app.put('/api/v1/restaurants/:id', (request, response) => {

})



app.delete('/api/v1/restaurants/:id', (request, response) => {
  database('restaurants').where('id', request.params.id).delete()
  .then(restaurant => {
     response.status(201).json({ id: restaurant[0] })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})



app.get('/api/v1/cities/:id/restaurants', (request, response) => {
  database('restaurants').where('city_id', request.params.id).select()
  .then((restaurants) => {
    response.status(200).json(restaurants);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
})


app.post('/api/v1/cities/:id/restaurants', (request, response) => {
  const restaurant = request.body
  const { id } = request.params

  database('restaurants').insert(restaurant, 'id')
  .then(restaurant => {
    response.status(201).json({ ...request.body, id: restaurant[0], city_id: id })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}.`);
});

module.exports = app
