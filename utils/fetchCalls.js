const getCityIds = async (city) => {
  const cleanCity = city.split(' ').join('%20')
  const response = await fetch(`https://developers.zomato.com/api/v2.1/cities?q=${cleanCity}`, {
    method: 'GET',
    headers: {
      'user-key': '0676db05670be55fe206d5f32f38893a'
    }
  })
  const result = await response.json()
  return getRestaurants(result.location_suggestions[0].id)
  
 }

const getRestaurants = async (id) => {
  const response = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=Taco`, {
    method: 'GET',
    headers: {
      'user-key': '0676db05670be55fe206d5f32f38893a'
    }
  })

  const result = await response.json()
  return result.restaurants
}

module.exports = { getCityIds, getRestaurants }

