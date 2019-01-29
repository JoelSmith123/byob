const cityData = require('./cityData')
const getCityIds = require('./cityData')


const getRestaurantData = () => {
  const cityAndRestaurats = cityData.map(async city => {
  const restaurantsPerCity = await getCityIds(city.name)
  const cleanRestaurants = await cleanRestaurantData(restaurantsPerCity)
    city.restaurants = cleanRestaurants
   return city
  })
  return Promise.all(cityAndRestaurats)
}


const cleanRestaurantData = (restaurants) => {
  return restaurants.map(restaurant => {
    return {
      name: restaurant.restaurant.name,
      address: restaurant.restaurant.location.address,
      city: restaurant.restaurant.location.city,
      rating: restaurant.restaurant.user_rating.aggregate_rating,
      avg_cost: '$' + restaurant.restaurant.average_cost_for_two
    }
  })
}

module.exports = getRestaurantData