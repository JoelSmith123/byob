const cityData = require('../../../utils/testCityData')


const createCity = (knex, city) => {
  return knex('cities').insert({
    name: city.name,
    state: city.state,
    population: city.population,
    capital: city.capital,
  }, 'id')
  .then(cityId => {
    let restaurantPromises = [];

    city.restaurants.forEach(restaurant => {
      restaurantPromises.push(
        createRestaurant(knex, {
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          rating: parseInt(restaurant.rating),
          avg_cost: restaurant.avg_cost,
          city_id: cityId[0]
        })
      )
    });

    return Promise.all(restaurantPromises);
  })
};

const createRestaurant = (knex, restaurant) => {
  return knex('restaurants').insert(restaurant);
};

exports.seed = (knex, Promise) => {
  return knex('restaurants').del() 
    .then(() => knex('cities').del()) 
    .then(() => {
      let cityPromises = [];

      cityData.forEach(city => {
        cityPromises.push(createCity(knex, city));
      });

      return Promise.all(cityPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};