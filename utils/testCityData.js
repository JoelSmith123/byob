const testCityData = [
  {
    name: 'New York City',
    state: 'NY',
    population: 8622698,
    capital: false,
    restaurants: [
      {name: "Los Tacos No. 1", address: "Chelsea Market, 75 9th Avenue, New York 10011", city: "New York City", rating: "4.4", avg_cost: "$25"},
      {name: "Taco Bandito", address: "325 8th Avenue, New York 10001", city: "New York City", rating: "3.5", avg_cost: "$20"},
      {name: "Buddy's Burrito & Taco Bar", address: "254 Court Street, Brooklyn 11231", city: "New York City", rating: "3.4", avg_cost: "$40"}
    ]
  },
  {
    name: 'Indianapolis',
    state: 'IN',
    population: 863002,
    capital: true,
    restaurants: [
      {name: "Tacos Without Borders", address: "Location Varies, Indianapolis", city: "Indianapolis", rating: "4.0", avg_cost: "$10"},
      {name: "Taco & Burrito Place", address: "4102 N Keystone Ave, Indianapolis 46205", city: "Indianapolis", rating: "3.9", avg_cost: "$10"},
      {name: "Taco Bell", address: "6165 North Keystone Avenue. 46220", city: "Indianapolis", rating: "3.2", avg_cost: "$10"}
    ]
  },
  {
    name: 'Seattle',
    state: 'WA',
    population: 724745,
    capital: false,
    restaurants: [
      {name: "Malena's Taco Shop", address: "620 W McGraw Street, Seattle 98119", city: "Seattle", rating: "4.5", avg_cost: "$25"},
      {name: "Chipotle", address: "1501 4th Avenue, Seattle 98101", city: "Seattle", rating: "3.8", avg_cost: "$20"},
      {name: "Chipotle", address: "4229 University Way NE, Seattle 98105", city: "Seattle", rating: "3.9", avg_cost: "$20"}
    ]
  },

  {
    name: 'El Paso',
    state: 'TX',
    population: 683577,
    capital: false,
    restaurants: [
      {name: "Chico's Tacos", address: "5305 Montana Ave, El Paso 79903", city: "El Paso", rating: "3.6", avg_cost: "$10"},
      {name: "Chico's Tacos", address: "3401 Dyer St, El Paso 79930", city: "El Paso", rating: "3.7", avg_cost: "$10"},
      {name: "Paco Wongs Chinese Restaurant", address: "7111 North Mesa Street 79912", city: "El Paso", rating: "3.6", avg_cost: "$25"}
    ]
  }
]

module.exports = testCityData