const cityData = require('../../cityData')


const createCity = (knex, city) => {
  return knex('cities').insert({
    name: city.name,
    state: city.state,
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
          rating: restaurant.rating,
          avg_cost: restaurant.avg_cost,
          city_id: cityId[0]
        })
      )
    });

    return Promise.all(restaurantPromises);
  })
};

const createRestaurant = (knex, restaurant) => {
  return knex('taco_restaurants').insert(restaurant);
};

exports.seed = (knex, Promise) => {
  return knex('taco_restaurants').del() // delete footnotes first
    .then(() => knex('cities').del()) // delete all papers
    .then(() => {
      let cityPromises = [];

      cityData.forEach(city => {
        cityPromises.push(createCity(knex, city));
      });

      return Promise.all(cityPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};