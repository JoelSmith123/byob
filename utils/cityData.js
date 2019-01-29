
const cityData = [
  {
    name: 'New York City',
    state: 'NY',
    population: 8622698,
    capital: false,
    restaurants: [
      {name: "Los Tacos No. 1", address: "Chelsea Market, 75 9th Avenue, New York 10011", city: "New York City", rating: "4.4", avg_cost: "$25"}
      {name: "Cascabel Taqueria", address: "1556 2Nd Avenue 10028", city: "New York City", rating: "4.3", avg_cost: "$60"}
      {name: "Sombrero", address: "303 West 48th Street, New York 10036", city: "New York City", rating: "2.6", avg_cost: "$65"}
      {name: "Breakroom Burgers & Tacos", address: "83 Baxter Street, New York 10013", city: "New York City", rating: "3.2", avg_cost: "$25"}
      {name: "Nuevo Mexico", address: "489 5th Avenue, Brooklyn 11215", city: "New York City", rating: "4.3", avg_cost: "$50"}
      {name: "Pampano Taqueria", address: "805 3rd Avenue, New York 10022", city: "New York City", rating: "3.6", avg_cost: "$25"}
      {name: "Donna", address: "27 Broadway 11249", city: "New York City", rating: "3.0", avg_cost: "$80"}
      {name: "Takumi", address: "Chelsea Market, 75 9th Avenue, New York 10011", city: "New York City", rating: "2.9", avg_cost: "$30"}
      {name: "Taco Bandito", address: "325 8th Avenue, New York 10001", city: "New York City", rating: "3.5", avg_cost: "$20"}
      {name: "Buddy's Burrito & Taco Bar", address: "254 Court Street, Brooklyn 11231", city: "New York City", rating: "3.4", avg_cost: "$40"}
      {name: "Taco Mix", address: "234 E 116th Street, New York 10029", city: "New York City", rating: "3.5", avg_cost: "$30"}
    ]
  },
  {
    name: 'Los Angeles',
    state: 'CA',
    population: 3999759,
    capital: false,
    restaurants: [
      {name: "La Tostaderia", address: "317 S Broadway, Los Angeles, CA 90013", city: "Los Angeles", rating: 0, avg_cost: "$0"}
      {name: "Holbox", address: "3655 S. Grand Avenue. Suite C9", city: "Los Angeles", rating: 0, avg_cost: "$25"}
      {name: "Petty Cash Taqueria", address: "712 South Santa Fe Avenue 90021", city: "Los Angeles", rating: 0, avg_cost: "$0"}
      {name: "Trejo’s Tacos - La Brea", address: "1048 South La Brea Avenue, Mid-Wilshire", city: "Los Angeles", rating: "3.3", avg_cost: "$0"}
      {name: "Coconut's Fish Cafe", address: "809 S Hill St, Los Angeles, CA 90014", city: "Los Angeles", rating: 0, avg_cost: "$25"}
      {name: "Bäco Mercat", address: "408 S Main St, Los Angeles 90013", city: "Los Angeles", rating: "4.2", avg_cost: "$25"}
      {name: "Mexicali Taco & Co", address: "702 N Figueroa St, Los Angeles 90012", city: "Los Angeles", rating: "4.0", avg_cost: "$10"}
      {name: "Border Grill", address: "445 S Figueroa St, Los Angeles 90071", city: "Los Angeles", rating: "4.1", avg_cost: "$70"}
      {name: "Trejo's Cantina - Hollywood", address: "1556 North Cahuenga Boulevard, Hollywood 90028", city: "Los Angeles", rating: 0, avg_cost: "$0"}
      {name: "Best Fish Taco in Ensenada", address: "1650 Hillhurst Ave, Los Angeles 90027", city: "Los Angeles", rating: "4.4", avg_cost: "$10"}
      {name: "Tacos Tumbras a Tomás", address: "317 S Broadway, Los Angeles 90013", city: "Los Angeles", rating: "3.4", avg_cost: "$0"}
    ]
  },
  {
    name: 'Chicago',
    state: 'IL',
    population: 2716450,
    capital: false,
    restaurants: [
      {name: "Antique Taco", address: "1360 North Milwaukee Avenue 60622", city: "Chicago", rating: "4.2", avg_cost: "$35"}
      {name: "¡Hello Tacos! De Cero", address: "814 W Randolph Street, Chicago 60607", city: "Chicago", rating: "4.3", avg_cost: "$50"}
      {name: "Flaco's Tacos", address: "725 S Dearborn Street 60605", city: "Chicago", rating: "4.3", avg_cost: "$25"}
      {name: "Velvet Taco", address: "1110 North State Street 60610", city: "Chicago", rating: "3.9", avg_cost: "$25"}
      {name: "Flaco's Tacos", address: "46 E Chicago Avenue, Chicago 60611", city: "Chicago", rating: "4.0", avg_cost: "$25"}
      {name: "Big Star", address: "1531 N Damen Avenue, Chicago 60622", city: "Chicago", rating: "4.7", avg_cost: "$50"}
      {name: "Taco Joint", address: "1969 N Halsted Street 60614", city: "Chicago", rating: "4.1", avg_cost: "$40"}
      {name: "Taco Joint", address: "158 Went Ontario Street 60654", city: "Chicago", rating: "3.8", avg_cost: "$40"}
      {name: "Arturo's Tacos", address: "2001 N Western Avenue, Chicago 60647", city: "Chicago", rating: "4.1", avg_cost: "$30"}
      {name: "Raymond's Tacos #2", address: "2406 S Blue Island Avenue, Chicago 60608", city: "Chicago", rating: "4.1", avg_cost: "$15"}
      {name: "L' Patron Tacos", address: "3749 W Fullerton Ave, Chicago, 60647", city: "Chicago", rating: "3.8", avg_cost: "$30"}
    ]
  },
  {
    name: 'Houston',
    state: 'TX',
    population: 2312717,
    capital: false,
    restaurants: [
      {name: "Torchy's Tacos", address: "2411 South. Shepherd Drive. 77019", city: "Houston", rating: "4.6", avg_cost: "$25"}
      {name: "Tacos a Go-Go", address: "3704 Main Street, Houston 77002", city: "Houston", rating: "4.3", avg_cost: "$20"}
      {name: "Goode Company Hamburgers & Taqueria", address: "4902 Kirby Drive, Houston 77054", city: "Houston", rating: "4.2", avg_cost: "$20"}
      {name: "Tacos A Go-Go", address: "2912 White Oak Drive, Houston 77007", city: "Houston", rating: "4.0", avg_cost: "$20"}
      {name: "Velvet Taco", address: "4819 Washington Avenue, Houston 77007", city: "Houston", rating: "3.6", avg_cost: "$25"}
      {name: "Torchy's Tacos", address: "2400 Times Boulevard. 77005", city: "Houston", rating: "3.9", avg_cost: "$25"}
      {name: "Torchy's Tacos", address: "350 West. 19th Street Ste 1 77008", city: "Houston", rating: "3.8", avg_cost: "$20"}
      {name: "Brothers Taco House", address: "1604 Dowling Street, Houston 77002", city: "Houston", rating: "3.7", avg_cost: "$20"}
      {name: "Tacos Tierra Caliente", address: "2003 W Alabama Street, Houston 77098", city: "Houston", rating: "3.7", avg_cost: "$10"}
      {name: "Villa Arcos", address: "3009 Navigation Blvd, Houston 77003", city: "Houston", rating: "3.5", avg_cost: "$10"}
      {name: "Dizzy Kaktus", address: "301 Main Street, Houston 77002", city: "Houston", rating: 0, avg_cost: "$45"}
    ]
  },
  {
    name: 'Phoenix',
    state: 'AZ',
    population: 1626078,
    capital: true,
    restaurants: [
      {name: "America's Taco Shop", address: "2041 North 7th Street, Phoenix 85006", city: "Phoenix", rating: "4.2", avg_cost: "$10"}
      {name: "La Santisima Gourmet Taco Shop", address: "1919 North 16th Street, Midtown, Phoenix 85006", city: "Phoenix", rating: "4.3", avg_cost: "$10"}
      {name: "Carolina's Mexican Food", address: "2126 East Cactus, Phoenix 85022", city: "Phoenix", rating: "4.3", avg_cost: "$10"}
      {name: "The Stand", address: "3538 East Indian School Road, Biltmore/Arcadia, Phoenix 85018", city: "Phoenix", rating: "3.9", avg_cost: "$10"}
      {name: "Blanco Tacos + Tequila", address: "2502 East Camelback Road #122 85016", city: "Phoenix", rating: "3.4", avg_cost: "$25"}
      {name: "Urban Taco", address: "6522 North 16th Street, Phoenix 85016", city: "Phoenix", rating: "3.4", avg_cost: "$25"}
      {name: "Gil's Taste of Taos", address: "1601 East Bell Road 85022", city: "Phoenix", rating: "3.4", avg_cost: "$10"}
      {name: "Taco Guild", address: "546 East Osborn Road, Phoenix 85012", city: "Phoenix", rating: "3.6", avg_cost: "$10"}
      {name: "Tacos de Juarez", address: "1017 North 7th Street, Downtown, Phoenix 85006", city: "Phoenix", rating: "3.8", avg_cost: "$10"}
      {name: "Chronic Tacos", address: "3121 W. Peoria Avenue, #104 Phoenix 85029", city: "Phoenix", rating: 0, avg_cost: "$0"}
      {name: "Joyride Taco House", address: "5202 North Central Avenue, Phoenix 85012", city: "Phoenix", rating: "3.4", avg_cost: "$10"}
    ]
  },
  {
    name: 'Philadelphia',
    state: 'PA',
    population: 1580863,
    capital: false,
    restaurants: [
      {name: "El Vez", address: "121 South 13th Street 19107", city: "Philadelphia", rating: "4.5", avg_cost: "$70"}
      {name: "Tequilas", address: "1602 Locust Street, Philadelphia 19103", city: "Philadelphia", rating: "4.2", avg_cost: "$40"}
      {name: "Union Taco", address: "4229 Main Street 19127", city: "Philadelphia", rating: "3.1", avg_cost: "$20"}
      {name: "Varga Bar", address: "941 Spruce Street, Philadelphia 19107", city: "Philadelphia", rating: "4.1", avg_cost: "$25"}
      {name: "Taco Riendo", address: "1301 N 5th Street, Ludlow, Philadelphia 19122", city: "Philadelphia", rating: "4.2", avg_cost: "$30"}
      {name: "City Tap House - UC", address: "3925 Walnut Street, 2nd Floor Balcony 19104", city: "Philadelphia", rating: "4.0", avg_cost: "$75"}
      {name: "Honest Tom's Taco Shop", address: "261 S 44th Street, Philadelphia 19104", city: "Philadelphia", rating: "3.8", avg_cost: "$20"}
      {name: "Buena Onda", address: "The Granary, 1901 Callowhill Street, Suite 1901 C, Philadelphia 19130", city: "Philadelphia", rating: "3.3", avg_cost: "$35"}
      {name: "South Philadelphia Tap Room", address: "1509 Mifflin Street, Philadelphia 19145", city: "Philadelphia", rating: "4.0", avg_cost: "$30"}
      {name: "Calle Del Sabor", address: "Frankford Avenue & Girard Avenue, Philadelphia", city: "Philadelphia", rating: 0, avg_cost: "$0"}
      {name: "Loco Pez", address: "2401 E Norris Street, Philadelphia 19125", city: "Philadelphia", rating: "3.9", avg_cost: "$25"}
    ]
  },
  {
    name: 'San Antonio',
    state: 'TX',
    population: 1511946,
    capital: false,
    restaurants: [
      {name: "Torchy's Tacos", address: "999 East. Basse Road #183 78209", city: "San Antonio", rating: "3.8", avg_cost: "$10"}
      {name: "Rosa's Tacos To Go", address: "1721 Nogalitos Street., San Antonio 78204", city: "San Antonio", rating: "3.9", avg_cost: "$10"}
      {name: "Taco Palenque", address: "1002 NE Loop 410, San Antonio 78209", city: "San Antonio", rating: "4.0", avg_cost: "$10"}
      {name: "Tony's Tacos To Go", address: "1503 Nogalitos, San Antonio 78204", city: "San Antonio", rating: "3.6", avg_cost: "$10"}
      {name: "Chapala Taco House", address: "1363 Austin Highway, San Antonio 78209", city: "San Antonio", rating: "3.8", avg_cost: "$20"}
      {name: "Christan's Tacos", address: "8054 Midcrown Drive, San Antonio 78218", city: "San Antonio", rating: "3.9", avg_cost: "$25"}
      {name: "Taco Kitchen", address: "1027 Rittiman Road, San Antonio 78218", city: "San Antonio", rating: "3.8", avg_cost: "$20"}
      {name: "Taqueria Guadalajara", address: "2702 Roosevelt Avenue, San Antonio 78214", city: "San Antonio", rating: "3.6", avg_cost: "$13"}
      {name: "Tink-a-Tako #6", address: "3227 SW Military Drive, Suite 101, San Antonio 78211", city: "San Antonio", rating: "3.2", avg_cost: "$35"}
      {name: "Las Delicias Tacos #1", address: "1603 W Commerce Street, Suite 100, San Antonio 78207", city: "San Antonio", rating: "3.2", avg_cost: "$13"}
      {name: "Taqueria Guadalajara", address: "2603 Goliad Road, San Antonio 78223", city: "San Antonio", rating: "3.5", avg_cost: "$13"}
    ]
  },
  {
    name: 'San Diego',
    state: 'CA',
    population: 1419516,
    capital: false,
    restaurants: [
      {name: "Puesto At The Headquarters", address: "789 West. Harbor Drive., Suite 155 92101", city: "San Diego", rating: "3.9", avg_cost: "$25"}
      {name: "Mike's Taco Club", address: "5060 Newport Avenue, San Diego 92107", city: "San Diego", rating: "3.1", avg_cost: "$20"}
      {name: "La Puerta", address: "560 4th Avenue, San Diego 92101", city: "San Diego", rating: "4.2", avg_cost: "$50"}
      {name: "Rockin Baja Lobster", address: "310 5th Avenue, San Diego 92101", city: "San Diego", rating: "3.8", avg_cost: "$40"}
      {name: "The Taco Stand", address: "3000 Upas St Suite 105, San Diego, CA 92104", city: "San Diego", rating: 0, avg_cost: "$15"}
      {name: "The Taco Stand", address: "621 Pearl Street, La Jolla 92037", city: "San Diego", rating: "3.6", avg_cost: "$20"}
      {name: "Lucha Libre", address: "3016 University Avenue, San Diego 92104", city: "San Diego", rating: "3.3", avg_cost: "$25"}
      {name: "El Charco", address: "1310 Third Avebue, Suite C301, Chula Vista 91911", city: "San Diego", rating: 0, avg_cost: "$30"}
      {name: "Taco Surf Taco Shop", address: "4657 Mission Boulevard, San Diego 92109", city: "San Diego", rating: "4.5", avg_cost: "$15"}
      {name: "El Zarape Mexican", address: "4642 Park Blvd, San Diego 92116", city: "San Diego", rating: "4.5", avg_cost: "$10"}
      {name: "Buster's Beach House Grill & Longboard Bar", address: "807 W Harbor Dr, San Diego 92101", city: "San Diego", rating: "3.6", avg_cost: "$25"}
    ]
  },
  {
    name: 'Dallas',
    state: 'TX',
    population: 1341075,
    capital: false,
    restaurants: [
      {name: "Fuel City Tacos (Super Tacaso)", address: "801 S Riverfront Boulevard, Dallas 75207", city: "Dallas", rating: "4.4", avg_cost: "$15"}
      {name: "Velvet Taco", address: "3012 N Henderson Avenue, Dallas 75206", city: "Dallas", rating: "4.6", avg_cost: "$25"}
      {name: "Rusty Taco", address: "4802 Greenville Avenue, Dallas 75206", city: "Dallas", rating: "3.8", avg_cost: "$20"}
      {name: "Torchy's Tacos", address: "5921 Forest Lane. #200 75230", city: "Dallas", rating: "4.4", avg_cost: "$35"}
      {name: "Nickel and Rye", address: "2523 McKinney Avenue 75201", city: "Dallas", rating: "3.3", avg_cost: "$55"}
      {name: "Torchy's Tacos", address: "5600 Smu Boulevard. #102 75206", city: "Dallas", rating: "3.7", avg_cost: "$35"}
      {name: "Taqueria El Si Hay", address: "601 W Davis Street, Dallas 75208", city: "Dallas", rating: "3.8", avg_cost: "$25"}
      {name: "Torchy's Tacos", address: "14760 Preston Road Ste 124 75254", city: "Dallas", rating: "3.7", avg_cost: "$35"}
      {name: "Rusty Taco", address: "5350 Harry Hines Boulevard, Dallas 75235", city: "Dallas", rating: "3.5", avg_cost: "$20"}
      {name: "Torchy's Tacos", address: "9440 Garland Road Ste. 234 75218", city: "Dallas", rating: "3.6", avg_cost: "$35"}
      {name: "Tacos la Banqueta", address: "7233 Gaston Avenue, Dallas 75214", city: "Dallas", rating: "3.4", avg_cost: "$15"}
    ]
  },
  {
    name: 'San Jose',
    state: 'CA',
    population: 1035317,
    capital: false,
    restaurants: [
      {name: "Loteria Taco Bar", address: "San Pedro Square Market, 87 N San Pedro Street, San Jose 95110", city: "San Jose", rating: "3.2", avg_cost: "$30"}
      {name: "Taco Bravo", address: "1950 S Bascom Avenue, San Jose 95008", city: "San Jose", rating: "4.0", avg_cost: "$15"}
      {name: "Tacos Al Pastor", address: "400 S Bascom Avenue, San Jose 95128", city: "San Jose", rating: "3.3", avg_cost: "$30"}
      {name: "Tacos Al Pastor", address: "1629 Meridian Avenue, San Jose 95125", city: "San Jose", rating: "3.5", avg_cost: "$25"}
      {name: "Tacos Al Carbon", address: "1733 Story Road, San Jose 95122", city: "San Jose", rating: "3.6", avg_cost: "$45"}
      {name: "Tacos Mexico", address: "1408 S Bascom Avenue, San Jose 95128", city: "San Jose", rating: "3.4", avg_cost: "$20"}
      {name: "Tacos Autlense", address: "1020 Story Road, San Jose 95122", city: "San Jose", rating: "3.4", avg_cost: "$20"}
      {name: "El Taco De Oro", address: "5220 North 1st Street 95002", city: "San Jose", rating: "3.3", avg_cost: "$30"}
      {name: "Tacos de Los Altos", address: "Location Varies, San Jose 95125", city: "San Jose", rating: 0, avg_cost: "$13"}
      {name: "Senor Taco", address: "1375 Blossom Hill Road, San Jose 95118", city: "San Jose", rating: "4.0", avg_cost: "$13"}
      {name: "Royal Taco", address: "1469 Landess Avenue, San Jose 95035", city: "San Jose", rating: "3.9", avg_cost: "$25"}
    ]
  },
  {
    name: 'Austin',
    state: 'TX',
    population: 950715,
    capital: true,
    restaurants: [
      {name: "Guero's Taco Bar", address: "1412 South Congress Avenue 78704", city: "Austin", rating: "4.0", avg_cost: "$45"}
      {name: "Wahoo's Fish Taco", address: "509 Rio Grande Street, Suite A, Austin 78701", city: "Austin", rating: "4.1", avg_cost: "$25"}
      {name: "Maria's Taco Xpress", address: "2529 S Lamar Boulevard, Austin 78704", city: "Austin", rating: "4.3", avg_cost: "$25"}
      {name: "Tacodeli", address: "1500 Spyglass Drive, Austin 78746", city: "Austin", rating: "4.4", avg_cost: "$20"}
      {name: "Tacos and Tequila", address: "507 Pressler Street, Austin 78703", city: "Austin", rating: "3.9", avg_cost: "$50"}
      {name: "Ms P's Electric Cock", address: "1101 S Congress Avenue, Austin 78704", city: "Austin", rating: "3.4", avg_cost: "$25"}
      {name: "One Taco", address: "520 W 6th Street 78701", city: "Austin", rating: "3.4", avg_cost: "$25"}
      {name: "Taco Joint", address: "2807 San Jacinto Boulevard, Austin 78712", city: "Austin", rating: "3.6", avg_cost: "$25"}
      {name: "Papalote Taco", address: "2803 S Lamar Boulevard, Austin 78704", city: "Austin", rating: "4.2", avg_cost: "$20"}
      {name: "Tacodeli", address: "4200 N Lamar Boulevard 78756", city: "Austin", rating: "3.7", avg_cost: "$20"}
      {name: "Paco's Tacos", address: "1304 E 51st Street, Austin 78723", city: "Austin", rating: "3.8", avg_cost: "$30"}
    ]
  },
  {
    name: 'Jacksonville',
    state: 'FL',
    population: 892062,
    capital: false,
    restaurants: [
      {name: "Taco Bell", address: "3649 Phillips Hwy 32207", city: "Jacksonville", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Loco", address: "Location Varies, Jacksonville", city: "Jacksonville", rating: 0, avg_cost: "$10"}
      {name: "Taco Del Mar", address: "2771 Monument Rd Unit 27, Jacksonville 32225", city: "Jacksonville", rating: "3.2", avg_cost: "$10"}
      {name: "Taco Bell", address: "5151 University Boulevard West 32216", city: "Jacksonville", rating: "2.5", avg_cost: "$10"}
      {name: "Taco Bell", address: "8331 Baymeadows Road 32256", city: "Jacksonville", rating: "2.7", avg_cost: "$10"}
      {name: "Taco Libre", address: "14286 Beach Boulevard, Jacksonville 32250", city: "Jacksonville", rating: 0, avg_cost: "$30"}
      {name: "Taco Bell", address: "5905 Merrill 32277", city: "Jacksonville", rating: 0, avg_cost: "$10"}
      {name: "Taco Bell", address: "11646 San Jose Boulevard 32223", city: "Jacksonville", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "9341 Atlantic Boulevard 32225", city: "Jacksonville", rating: "2.7", avg_cost: "$10"}
      {name: "Corner Taco", address: "818 Post Street 32205", city: "Jacksonville", rating: "4.0", avg_cost: "$25"}
      {name: "Taco Bell", address: "7331 103rd Street 32210", city: "Jacksonville", rating: 0, avg_cost: "$10"}
    ]
  },
  {
    name: 'San Francisco',
    state: 'CA',
    population: 884363,
    capital: false,
    restaurants: [
      {name: "Nick's Crispy Tacos", address: "1500 Broadway, Russian Hill 94109", city: "San Francisco", rating: "4.2", avg_cost: "$45"}
      {name: "Tropisueno", address: "75 Yerba Buena Lane, SOMA 94103", city: "San Francisco", rating: "4.4", avg_cost: "$40"}
      {name: "Tacko", address: "3115 Fillmore Street, San Francisco 94123", city: "San Francisco", rating: "3.6", avg_cost: "$25"}
      {name: "Rich Table", address: "199 Gough Street, San Francisco 94102", city: "San Francisco", rating: "3.9", avg_cost: "$75"}
      {name: "Taco Shop at Underdogs", address: "1824 Irving Street 94122", city: "San Francisco", rating: "4.0", avg_cost: "$25"}
      {name: "Pacific Catch Fresh Fish Grill", address: "2046 Chestnut Street 94123", city: "San Francisco", rating: "4.3", avg_cost: "$35"}
      {name: "Taqueria Cancun", address: "2288 Mission District Street, San Francisco 94110", city: "San Francisco", rating: "3.7", avg_cost: "$25"}
      {name: "Loló", address: "974 Valencia Street, San Francisco 94110", city: "San Francisco", rating: "4.1", avg_cost: "$60"}
      {name: "La Taqueria", address: "2889 Mission District Street, San Francisco 94110", city: "San Francisco", rating: "4.4", avg_cost: "$25"}
      {name: "West of Pecos", address: "550 Valencia Street, San Francisco 94110", city: "San Francisco", rating: "3.8", avg_cost: "$70"}
      {name: "Uno Dos Tacos", address: "595 Market 94105", city: "San Francisco", rating: "3.1", avg_cost: "$20"}
    ]
  },
  {
    name: 'Columbus',
    state: 'OH',
    population: 879170,
    capital: true,
    restaurants: [
      {name: "Condado", address: "132 S High Street, Columbus 43215", city: "Columbus", rating: "2.8", avg_cost: "$40"}
      {name: "Tacos Fogoncito", address: "51 S Hamilton Road, Whitehall 43213", city: "Columbus", rating: 0, avg_cost: "$0"}
      {name: "Junior's Tacos", address: "184 West 5th Avenue 43201", city: "Columbus", rating: "3.9", avg_cost: "$10"}
      {name: "Condado", address: "1227 N High St., Columbus 43201", city: "Columbus", rating: "3.6", avg_cost: "$25"}
      {name: "Yabo's Tacos", address: "7097 State Rt 3, Westerville 43082", city: "Columbus", rating: "3.9", avg_cost: "$10"}
      {name: "Taco Nazo", address: "2200 E Dublin Granville Rd, Columbus 43229", city: "Columbus", rating: "3.5", avg_cost: "$10"}
      {name: "Taco Bell", address: "808 South High Street 43206", city: "Columbus", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Bell", address: "1312 West 5th Avenue 43212", city: "Columbus", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Bell", address: "3834 Morse Road 43219", city: "Columbus", rating: "2.5", avg_cost: "$10"}
      {name: "Taco Bell", address: "1429 Polaris Parkway 43240", city: "Columbus", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Dan's", address: "119 1/2 South Prospect Street, Granville 43023", city: "Columbus", rating: "3.4", avg_cost: "$10"}
    ]
  },
  {
    name: 'Fort Worth',
    state: 'TX',
    population: 874168,
    capital: false,
    restaurants: [
      {name: "Velvet Taco", address: "2700 W 7th Street, Fort Worth 76107", city: "Fort Worth", rating: "3.7", avg_cost: "$25"}
      {name: "Torchy's Tacos", address: "928 Northton Street. 76104", city: "Fort Worth", rating: "3.9", avg_cost: "$25"}
      {name: "Taco Heads", address: "1812 Montgomery Street., Cultural District 76107", city: "Fort Worth", rating: "4.0", avg_cost: "$25"}
      {name: "San Luis Taqueria", address: "528 W Seminary Drive, Fort Worth 76115", city: "Fort Worth", rating: 0, avg_cost: "$15"}
      {name: "Yucatan Taco Stand", address: "909 W Magnolia Avenue, Fort Worth 76104", city: "Fort Worth", rating: "4.3", avg_cost: "$55"}
      {name: "Taqueria Ruby", address: "1101 Terminal Road, Fort Worth 76106", city: "Fort Worth", rating: "3.6", avg_cost: "$30"}
      {name: "Fuzzy's Taco Shop", address: "2917 W Berry Street, Fort Worth 76109", city: "Fort Worth", rating: "4.2", avg_cost: "$20"}
      {name: "Revolver Taco Lounge", address: "2822 W 7th Street, Fort Worth 76107", city: "Fort Worth", rating: "3.5", avg_cost: "$30"}
      {name: "Taco Diner", address: "156 W 4th Street, Fort Worth 76102", city: "Fort Worth", rating: "3.4", avg_cost: "$40"}
      {name: "San Luis Taqueria", address: "1901 8th Avenue, Fort Worth 76110", city: "Fort Worth", rating: 0, avg_cost: "$15"}
      {name: "Don Taco", address: "3529 Heritage Trace Parkway, Suite 101, Fort Worth 76248", city: "Fort Worth", rating: "4.6", avg_cost: "$35"}
    ]
  },
  {
    name: 'Indianapolis',
    state: 'IN',
    population: 863002,
    capital: true,
    restaurants: [
      {name: "Tacos Without Borders", address: "Location Varies, Indianapolis", city: "Indianapolis", rating: "4.0", avg_cost: "$10"}
      {name: "Taco & Burrito Place", address: "4102 N Keystone Ave, Indianapolis 46205", city: "Indianapolis", rating: "3.9", avg_cost: "$10"}
      {name: "Roscoe's Tacos", address: "642 S Madison Ave, Greenwood 46142", city: "Indianapolis", rating: "4.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "49 W. Maryland St., Indianapolis 46204", city: "Indianapolis", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Bell", address: "951 Indiana Avenue 46202", city: "Indianapolis", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "3350 East Washington Street 46201", city: "Indianapolis", rating: "3.2", avg_cost: "$10"}
      {name: "Tacos 46", address: "3089 N High School Rd, Indianapolis 46224", city: "Indianapolis", rating: "3.8", avg_cost: "$10"}
      {name: "Taco Bell", address: "7275 West 10th Street 46214", city: "Indianapolis", rating: "3.1", avg_cost: "$10"}
      {name: "Indy Tacos", address: "2196 E 54th St, Indianapolis 46220", city: "Indianapolis", rating: "3.2", avg_cost: "$10"}
      {name: "Taco Bell", address: "6165 North Keystone Avenue. 46220", city: "Indianapolis", rating: "3.2", avg_cost: "$10"}
      {name: "George's Mexican Tacos", address: "801 Broad Ripple Ave, Indianapolis 46220", city: "Indianapolis", rating: "3.3", avg_cost: "$10"}
    ]
  },
  {
    name: 'Charlotte',
    state: 'NC',
    population: 859035,
    capital: false,
    restaurants: [
      {name: "The Tin Kitchen", address: "Trade and Tyron, Charlotte 28202", city: "Charlotte", rating: "3.7", avg_cost: "$10"}
      {name: "Taco Mac", address: "517 University Center Boulevard 28262", city: "Charlotte", rating: "3.5", avg_cost: "$40"}
      {name: "Que Onda Tacos + Tequila", address: "333 West Trade Street, #101 28202", city: "Charlotte", rating: 0, avg_cost: "$35"}
      {name: "Babalu Tapas & Tacos", address: "1511 East Boulevard, Dilworth 28203", city: "Charlotte", rating: 0, avg_cost: "$25"}
      {name: "Cabo Fish Taco", address: "3201 N Davidson Street, Charlotte 28205", city: "Charlotte", rating: "4.6", avg_cost: "$45"}
      {name: "SoCal Tacos", address: "312 S Tryon Street 28202", city: "Charlotte", rating: 0, avg_cost: "$0"}
      {name: "Paco's Tacos and Tequilla", address: "6401 Morrison Boulevard Ste 8A, SouthPark 28211", city: "Charlotte", rating: "4.1", avg_cost: "$25"}
      {name: "Taco Mac", address: "4625 Piedmont Row Drive 28210", city: "Charlotte", rating: "3.5", avg_cost: "$40"}
      {name: "Maki Taco", address: "Location Varies, Charlotte", city: "Charlotte", rating: "3.4", avg_cost: "$43"}
      {name: "RuRu's Tacos + Tequila", address: "715 Providence Road 28207", city: "Charlotte", rating: "3.4", avg_cost: "$40"}
      {name: "Salsarita's Fresh Cantina", address: "9201 University City Boulevard, Charlotte 28223", city: "Charlotte", rating: "2.9", avg_cost: "$20"}
    ]
  },
  {
    name: 'Seattle',
    state: 'WA',
    population: 724745,
    capital: false,
    restaurants: [
      {name: "Malena's Taco Shop", address: "620 W McGraw Street, Seattle 98119", city: "Seattle", rating: "4.5", avg_cost: "$25"}
      {name: "Chipotle", address: "1501 4th Avenue, Seattle 98101", city: "Seattle", rating: "3.8", avg_cost: "$20"}
      {name: "Chipotle", address: "4229 University Way NE, Seattle 98105", city: "Seattle", rating: "3.9", avg_cost: "$20"}
      {name: "Chely's Kitchen", address: "Grocery Outlet Parking Lot, 1126 Martin Luther King Jr Way, Seattle 98122", city: "Seattle", rating: "3.2", avg_cost: "$25"}
      {name: "Chipotle", address: "Northgate Mall, 401 NE Northgate Way, Seattle 98125", city: "Seattle", rating: "3.7", avg_cost: "$20"}
      {name: "Chipotle", address: "1415 Broadway, Seattle 98122", city: "Seattle", rating: "3.1", avg_cost: "$20"}
      {name: "Chipotle", address: "212 Westlake Avenue N, Seattle 98109", city: "Seattle", rating: 0, avg_cost: "$20"}
      {name: "Ivar's Acres of Clams", address: "1001 Alaskan Way, Seattle, WA 98104", city: "Seattle", rating: "4.1", avg_cost: "$95"}
      {name: "Bar Noroeste", address: "2021 7th Avenue, Seattle 98121", city: "Seattle", rating: 0, avg_cost: "$0"}
      {name: "Tacos Chukís", address: "The Alley, 219 Broadway E 98102", city: "Seattle", rating: "3.9", avg_cost: "$25"}
      {name: "Jalapenos Mex Food", address: "7815 Aurora Avenue N, Green Lake, Seattle 98103", city: "Seattle", rating: "2.7", avg_cost: "$25"}
    ]
  },
  {
    name: 'Denver',
    state: 'CO',
    population: 704621,
    capital: true,
    restaurants: [
      {name: "Tacos Tequila Whiskey", address: "1514 York Street, Denver 80206", city: "Denver", rating: "4.5", avg_cost: "$10"}
      {name: "El Taco De Mexico", address: "714 Santa Fe Drive, Denver 80204", city: "Denver", rating: "4.1", avg_cost: "$10"}
      {name: "Tag", address: "Larimer Square, 1441 Larimer Street, Denver 80202", city: "Denver", rating: "4.1", avg_cost: "$40"}
      {name: "Marg's Taco Bistro", address: "1519 Wynkoop Street, LoDo, Denver 80202", city: "Denver", rating: "3.6", avg_cost: "$25"}
      {name: "Taco Bell", address: "634 16th Street, Denver 80202", city: "Denver", rating: "2.6", avg_cost: "$20"}
      {name: "Machete Tequila + Tacos", address: "2817 East 3rd Avenue, Denver 80206", city: "Denver", rating: "3.6", avg_cost: "$25"}
      {name: "Margs Taco Bistro", address: "200 Fillmore Street, Denver 80206", city: "Denver", rating: "3.7", avg_cost: "$10"}
      {name: "Taco John's", address: "9675 Washington Street 80229", city: "Denver", rating: 0, avg_cost: "$25"}
      {name: "Torchy's Tacos", address: "1085 North Broadway 80203", city: "Denver", rating: "3.2", avg_cost: "$25"}
      {name: "Taco Wagon", address: "El Mercado de Lafaytte, 503 South Public Road, Lafayette 80026", city: "Denver", rating: "3.2", avg_cost: "$20"}
      {name: "Tacos Tequila Whiskey", address: "3300 West 32nd Avenue, Suite 100, Denver 80211", city: "Denver", rating: "3.9", avg_cost: "$10"}
    ]
  },
  {
    name: 'Boston',
    state: 'MA',
    population: 685094,
    capital: true,
    restaurants: [
      {name: "Lone Star Taco Bar", address: "479 Cambridge Street, Boston 02134", city: "Boston", rating: "3.9", avg_cost: "$30"}
      {name: "Dorado Tacos & Cemitas", address: "401 Harvard Street 02446", city: "Boston", rating: "4.2", avg_cost: "$25"}
      {name: "Naco Taco", address: "297 Massachusetts Avenue, Central Square, MIT 02139", city: "Boston", rating: "3.3", avg_cost: "$25"}
      {name: "Temazcal Tequila Cantina", address: "250 Northern Avenue, Boston 02210", city: "Boston", rating: "3.9", avg_cost: "$70"}
      {name: "Tamo Bistro & Bar", address: "1 Seaport Lane, Boston 02210", city: "Boston", rating: "3.5", avg_cost: "$40"}
      {name: "Rosa Mexicano", address: "155 Seaport Boulevard 02210", city: "Boston", rating: "3.3", avg_cost: "$70"}
      {name: "Audubon Circle Restaurant Bar", address: "838 Beacon Street, Boston 02215", city: "Boston", rating: "4.0", avg_cost: "$50"}
      {name: "Taco Mex", address: "65 Maverick Square, Boston 02128", city: "Boston", rating: "3.7", avg_cost: "$10"}
      {name: "Taco Loco Mexcian Grill", address: "44 Broadway, Somerville 02145", city: "Boston", rating: "3.6", avg_cost: "$25"}
      {name: "Tacomania", address: "245 Meridian Street, Boston 02128", city: "Boston", rating: "3.2", avg_cost: "$25"}
      {name: "Pedro's Tacos", address: "55 Bromfield Street, Boston 02108", city: "Boston", rating: "3.1", avg_cost: "$25"}
    ]
  },
  {
    name: 'El Paso',
    state: 'TX',
    population: 683577,
    capital: false,
    restaurants: [
      {name: "Chico's Tacos", address: "5305 Montana Ave, El Paso 79903", city: "El Paso", rating: "3.6", avg_cost: "$10"}
      {name: "Chico's Tacos", address: "3401 Dyer St, El Paso 79930", city: "El Paso", rating: "3.7", avg_cost: "$10"}
      {name: "Pro's Ranch Market", address: "10501 Gateway Boulevard West, Suite 600, El Paso 79925", city: "El Paso", rating: 0, avg_cost: "$0"}
      {name: "El Taco Tote", address: "1000 Magruder, El Paso 79925", city: "El Paso", rating: "3.8", avg_cost: "$25"}
      {name: "Chico's Tacos", address: "11381 Montwood Dr, El Paso 79936", city: "El Paso", rating: "4.1", avg_cost: "$10"}
      {name: "Chico's Tacos", address: "4230 Alameda Ave, El Paso 79905", city: "El Paso", rating: "3.7", avg_cost: "$10"}
      {name: "Tacos El Toro Bronco", address: "3825 N Piedras St, El Paso 79930", city: "El Paso", rating: "4.0", avg_cost: "$10"}
      {name: "Taco Cabana", address: "6345 Gateway West, El Paso 79925", city: "El Paso", rating: "3.4", avg_cost: "$10"}
      {name: "Tacos Chinampa", address: "6110 Gateway East Blvd, El Paso 79915", city: "El Paso", rating: "3.4", avg_cost: "$10"}
      {name: "El Taco Tote", address: "1461 N Zaragoza Rd, El Paso 79936", city: "El Paso", rating: "3.9", avg_cost: "$25"}
      {name: "Paco Wongs Chinese Restaurant", address: "7111 North Mesa Street 79912", city: "El Paso", rating: "3.6", avg_cost: "$25"}
    ]
  },
  {
    name: 'Detroit',
    state: 'MI',
    population: 673104,
    capital: false,
    restaurants: [
      {name: "Hot Taco Detroit", address: "2233 Park Ave, Detroit 48201", city: "Detroit", rating: "3.4", avg_cost: "$10"}
      {name: "Jose's Tacos", address: "218 E Grand River Ave, Detroit 48226", city: "Detroit", rating: 0, avg_cost: "$10"}
      {name: "Jacques Tacos Mobile Truck", address: "Location Varies, Detroit", city: "Detroit", rating: "3.4", avg_cost: "$10"}
      {name: "Taqo Cantina", address: "18 W Adams St, Detroit 48226", city: "Detroit", rating: "3.2", avg_cost: "$25"}
      {name: "Manuel's Taco Hut", address: "16806 Ecorse Rd, Allen Park 48101", city: "Detroit", rating: "3.9", avg_cost: "$10"}
      {name: "El Taco Veloz", address: "6170 Toledo St, Detroit 48209", city: "Detroit", rating: "3.2", avg_cost: "$10"}
      {name: "Taco Especial", address: "278 Southfield Rd, Ecorse 48229", city: "Detroit", rating: "4.0", avg_cost: "$10"}
      {name: "Del Taco", address: "5644 N Telegraph Rd, Dearborn Heights 48127", city: "Detroit", rating: "3.7", avg_cost: "$10"}
      {name: "Paco's Tacos", address: "4002 W Jefferson Ave, Ecorse 48229", city: "Detroit", rating: "3.5", avg_cost: "$10"}
      {name: "El Taquito Taco Truck", address: "W Vernor and Military, Detroit 48209", city: "Detroit", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Loco Mexican", address: "52899 Van Dyke Ave, Shelby Twp 48316", city: "Detroit", rating: "3.9", avg_cost: "$10"}
    ]
  },
  {
    name: 'Nashville',
    state: 'TN',
    population: 667560,
    capital: true,
    restaurants: [
      {name: "Taco Mamacita", address: "1200 Villa Place, Nashville 37212", city: "Nashville", rating: "4.6", avg_cost: "$25"}
      {name: "San Antonio Taco Company", address: "416 21st Ave S, Nashville 37203", city: "Nashville", rating: "4.2", avg_cost: "$10"}
      {name: "Mas Tacos Por Favor", address: "732 McFerrin Avenue, Nashville 37206", city: "Nashville", rating: "4.6", avg_cost: "$10"}
      {name: "The Local Taco", address: "4501 Murphy Road, Nashville 37209", city: "Nashville", rating: "4.1", avg_cost: "$10"}
      {name: "Bajo Sexto Taco", address: "216 5th Avenue South 37203", city: "Nashville", rating: "3.0", avg_cost: "$35"}
      {name: "The Local Taco", address: "146 Pewitt Dr, Brentwood", city: "Nashville", rating: "4.0", avg_cost: "$10"}
      {name: "Oscar's Taco Shop", address: "530 Church Street 37219", city: "Nashville", rating: "2.7", avg_cost: "$10"}
      {name: "The Local Taco", address: "1100 Fatherland St, Nashville 37206", city: "Nashville", rating: "3.2", avg_cost: "$10"}
      {name: "Swanky's Taco Shop", address: "1175 Meridian Blvd, Franklin 37067", city: "Nashville", rating: "3.9", avg_cost: "$25"}
      {name: "Taco Bell", address: "2004 W End Ave, Nashville 37203", city: "Nashville", rating: "3.2", avg_cost: "$10"}
      {name: "Oscar's Taco Shop", address: "1511 Columbia Ave, Franklin 37064", city: "Nashville", rating: "4.1", avg_cost: "$10"}
    ]
  },
  {
    name: 'Memphis',
    state: 'TN',
    population: 652236,
    capital: false,
    restaurants: [
      {name: "Maciel's Tortas & Tacos", address: "45 South Main Street, Memphis", city: "Memphis", rating: "3.1", avg_cost: "$25"}
      {name: "Babalu Tapas & Tacos", address: "2115 Madison Avenue, Overton Square 38104", city: "Memphis", rating: "4.0", avg_cost: "$25"}
      {name: "Swanky's Taco Shop", address: "6641 Poplar Ave Ste 109, Germantown 38138", city: "Memphis", rating: "4.2", avg_cost: "$10"}
      {name: "Swanky's Taco Shop", address: "4770 Poplar Ave Ste 102, Memphis 38117", city: "Memphis", rating: "4.1", avg_cost: "$10"}
      {name: "Elena's Taco Shop", address: "6105 Summer Avenue, Suite 101, Memphis 38134", city: "Memphis", rating: "3.9", avg_cost: "$25"}
      {name: "Tacos Borolas", address: "4273 American Way, Memphis 38118", city: "Memphis", rating: "3.4", avg_cost: "$10"}
      {name: "Maciel's Highland", address: "525 South Highland Street, East Memphis, Memphis", city: "Memphis", rating: 0, avg_cost: "$15"}
      {name: "Swanky's Taco Shop", address: "7111 Southcrest Parkway, Suite 101, Southaven 38671", city: "Memphis", rating: "3.2", avg_cost: "$25"}
      {name: "Taco Bell", address: "826 South Third 38106", city: "Memphis", rating: "2.8", avg_cost: "$10"}
      {name: "Taco Bell", address: "911 Estate Drive 38119", city: "Memphis", rating: "3.2", avg_cost: "$10"}
      {name: "Tacos Los Jarochos", address: "Summer And Mendenhall, Memphis 38122", city: "Memphis", rating: "3.0", avg_cost: "$10"}
    ]
  },
  {
    name: 'Portland',
    state: 'OR',
    population: 647805,
    capital: false,
    restaurants: [
      {name: "¿Por Qué No?", address: "3524 N Mississippi Avenue, Portland 97227", city: "Portland", rating: "4.5", avg_cost: "$25"}
      {name: "¿Por Qué No?", address: "4635 SE Hawthorne Boulevard, Portland 97215", city: "Portland", rating: "4.5", avg_cost: "$25"}
      {name: "Robo Taco", address: "607 SE Morrison Street, Buckman 97214", city: "Portland", rating: "3.5", avg_cost: "$25"}
      {name: "San Felipe Taqueria", address: "6221 SE Milwaukie Avenue 97202", city: "Portland", rating: "3.9", avg_cost: "$25"}
      {name: "The Waypost", address: "3120 N Williams Avenue, Portland 97227", city: "Portland", rating: "3.5", avg_cost: "$25"}
      {name: "Taqueria Hermanos Serralta", address: "8525 NE Fremont Street 97220", city: "Portland", rating: "3.1", avg_cost: "$25"}
      {name: "Portland Taco Company", address: "6141 SW Macadam, Portland 97239", city: "Portland", rating: "3.1", avg_cost: "$10"}
      {name: "Javier's Tacos", address: "121 N Lombard St, Portland 97217", city: "Portland", rating: "3.5", avg_cost: "$25"}
      {name: "Bandito Taco", address: "13565 NW Cornell Road, Portland 97229", city: "Portland", rating: "3.6", avg_cost: "$25"}
      {name: "Brass Tacks Sandwiches", address: "3535 N Vancouver Avenue, Portland 97227", city: "Portland", rating: "3.3", avg_cost: "$25"}
      {name: "Taco Bell", address: "2079 West Burnside Street 97209", city: "Portland", rating: "2.4", avg_cost: "$25"}
    ]
  },
  {
    name: 'Oklahoma City',
    state: 'OK',
    population: 643648,
    capital: true,
    restaurants: [
      {name: "Hacienda Tacos", address: "12086 N May Avenue, Oklahoma City 73120", city: "Oklahoma City", rating: "3.1", avg_cost: "$20"}
      {name: "Fuzzy's Taco Shop", address: "208 Johnny Bench Drive, Suite C, Oklahoma City 73104", city: "Oklahoma City", rating: "4.2", avg_cost: "$10"}
      {name: "Yucatan Taco Stand and Tequila Bar", address: "100 East California Avenue 110 73104", city: "Oklahoma City", rating: "3.8", avg_cost: "$25"}
      {name: "Big Truck Tacos", address: "530 NW 23rd Street, Oklahoma City 73103", city: "Oklahoma City", rating: "4.0", avg_cost: "$19"}
      {name: "Torchy's Tacos", address: "2050 NW 24th Avenue Ste 130 73069", city: "Oklahoma City", rating: "3.0", avg_cost: "$25"}
      {name: "Tacos San Pedro", address: "2301 SW 44th St, Oklahoma City 73119", city: "Oklahoma City", rating: "4.3", avg_cost: "$10"}
      {name: "Mid Del Taco", address: "4320 SE 15th St, Del City 73115", city: "Oklahoma City", rating: "3.9", avg_cost: "$10"}
      {name: "The Urban Taco Shop", address: "110 N Robinson Ave, Oklahoma City 73102", city: "Oklahoma City", rating: "3.6", avg_cost: "$10"}
      {name: "Tacos don Nacho", address: "3721 S Council Rd, Oklahoma City 73179", city: "Oklahoma City", rating: "4.5", avg_cost: "$10"}
      {name: "Sanchez Taco Truck /TAQUERIA SANCHEZ", address: "4011 NW 10th St, Oklahoma City 73107", city: "Oklahoma City", rating: "3.8", avg_cost: "$10"}
      {name: "Taco Vaca", address: "2221 S Central Ave, Oklahoma City 73129", city: "Oklahoma City", rating: "3.6", avg_cost: "$10"}
    ]
  },
  {
    name: 'Las Vegas',
    state: 'NV',
    population: 641676,
    capital: false,
    restaurants: [
      {name: "Tacos el Gordo", address: "3049 S Las Vegas Boulevard, Las Vegas 89109", city: "Las Vegas", rating: "4.5", avg_cost: "$35"}
      {name: "Tacos El Gordo", address: "1724 E Charleston Blvd, Las Vegas 89104", city: "Las Vegas", rating: "4.1", avg_cost: "$25"}
      {name: "Pink Taco", address: "4455 Paradise Rd, Las Vegas 89169", city: "Las Vegas", rating: "4.1", avg_cost: "$40"}
      {name: "Frijoles & Frescas Grilled Tacos", address: "4811 S Rainbow Boulevard, NV 89103", city: "Las Vegas", rating: 0, avg_cost: "$27"}
      {name: "Top of the World", address: "2000 Las Vegas Boulevard South 89104", city: "Las Vegas", rating: "4.1", avg_cost: "$70"}
      {name: "Pinches Tacos", address: "9205 W Russell Road, Suite 190, Las Vegas 89138", city: "Las Vegas", rating: 0, avg_cost: "$0"}
      {name: "T&T Tacos & Tequila", address: "3900 Las Vegas Boulevard S, Las Vegas 89109", city: "Las Vegas", rating: "3.8", avg_cost: "$40"}
      {name: "Los Tacos", address: "1710 E Charleston Blvd, Las Vegas 89104", city: "Las Vegas", rating: "4.0", avg_cost: "$10"}
      {name: "Pinches Tacos", address: "707 E. Fremont Street, Las Vegas 89101", city: "Las Vegas", rating: "3.4", avg_cost: "$10"}
      {name: "Chart House", address: "129 East Fremont Street 89101", city: "Las Vegas", rating: "3.8", avg_cost: "$70"}
      {name: "Lobster ME", address: "3663 Las Vegas Blvd S Ste 435, Las Vegas 89109", city: "Las Vegas", rating: "3.8", avg_cost: "$25"}
    ]
  },
  {
    name: 'Louisville',
    state: 'KY',
    population: 621349,
    capital: false,
    restaurants: [
      {name: "El Taco Luchador", address: "938 Baxter Ave, Louisville 40204", city: "Louisville", rating: "4.2", avg_cost: "$10"}
      {name: "Holy Mole Taco Truck", address: "Location Varies, Louisville", city: "Louisville", rating: "3.7", avg_cost: "$10"}
      {name: "Taco Bell", address: "108 East. Broadway 40202", city: "Louisville", rating: "3.1", avg_cost: "$10"}
      {name: "Taco Bell", address: "411 South 4th St., Louisville 40202", city: "Louisville", rating: "3.1", avg_cost: "$10"}
      {name: "Lolita's Tacos", address: "4222 Poplar Level Rd, Louisville 40213", city: "Louisville", rating: "3.7", avg_cost: "$25"}
      {name: "Taco Tico", address: "5925 Terry Rd, Louisville 40216", city: "Louisville", rating: "3.6", avg_cost: "$10"}
      {name: "Taco Bell", address: "1325 Veterans Parkway. 47129", city: "Louisville", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "3520 Bardstown Road. 40218", city: "Louisville", rating: "3.3", avg_cost: "$10"}
      {name: "Feast BBQ", address: "909 E Market St, Louisville 40206", city: "Louisville", rating: "3.6", avg_cost: "$10"}
      {name: "La Bamba", address: "1237 Bardstown Rd, Louisville 40204", city: "Louisville", rating: "3.5", avg_cost: "$10"}
      {name: "Mexa Steak Tacos", address: "3701 Lexington Road, Suite 1, Louisville 40207", city: "Louisville", rating: "3.1", avg_cost: "$25"}
    ]
  },
  {
    name: 'Baltimore',
    state: 'MD',
    population: 611648,
    capital: false,
    restaurants: [
      {name: "Amano Taco", address: "301 W 29th St, Baltimore", city: "Baltimore", rating: 0, avg_cost: "$0"}
      {name: "Taco Fiesta", address: "618 S Exeter St, Baltimore 21202", city: "Baltimore", rating: "3.8", avg_cost: "$10"}
      {name: "Papi's Tacos", address: "1703 Aliceanna St, Baltimore 21231", city: "Baltimore", rating: "3.5", avg_cost: "$25"}
      {name: "Pop Tacos", address: "1065 S Charles St, Baltimore 21230", city: "Baltimore", rating: "3.7", avg_cost: "$10"}
      {name: "Nino Taco", address: "10902 Boulevard Cir, Owings Mills 21117", city: "Baltimore", rating: "4.3", avg_cost: "$25"}
      {name: "TAKO Korean BBQ", address: "333 West Camden Street, Baltimore 21201", city: "Baltimore", rating: "3.1", avg_cost: "$10"}
      {name: "Tijuana Tacos", address: "3001 E Baltimore St, Baltimore 21224", city: "Baltimore", rating: "3.4", avg_cost: "$10"}
      {name: "Taco Love Grill", address: "11550 Philadelphia Road Suite 120, White Marsh 21162", city: "Baltimore", rating: "3.8", avg_cost: "$25"}
      {name: "Tijuana Tacos VI", address: "7703 Quarterfiled Rd., Glen Burnie 21061", city: "Baltimore", rating: "3.5", avg_cost: "$10"}
      {name: "El Taco Loco and Crepes", address: "Lerch Dr, Baltimore 21214", city: "Baltimore", rating: 0, avg_cost: "$10"}
      {name: "Woody's Taco Island", address: "Food Truck, Baltimore", city: "Baltimore", rating: 0, avg_cost: "$10"}
    ]
  },
  {
    name: 'Milwaukee',
    state: 'WI',
    population: 595351,
    capital: false,
    restaurants: [
      {name: "El Fogon Tacos & Beer", address: "8701 S Howell Ave, Oak Creek 53154", city: "Milwaukee", rating: "4.2", avg_cost: "$10"}
      {name: "Tacolote Taqueria", address: "831 S. Cesar Chavez Dr, Milwaukee 53204", city: "Milwaukee", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Loco", address: "3524 w Burnham, Milwaukee 53215", city: "Milwaukee", rating: "3.0", avg_cost: "$10"}
      {name: "Taco Amigo", address: "2104 Silvernail Road 53072", city: "Milwaukee", rating: "3.9", avg_cost: "$10"}
      {name: "Taco's El Rey", address: "2207 Lathrop Ave, Racine 53405", city: "Milwaukee", rating: "4.2", avg_cost: "$10"}
      {name: "Taco Bell", address: "510 N Mayfair Rd, Wauwatosa 53226", city: "Milwaukee", rating: "3.1", avg_cost: "$10"}
      {name: "Taco John's", address: "317 North Grand Avenue 53186", city: "Milwaukee", rating: "3.7", avg_cost: "$10"}
      {name: "Taco Bell", address: "8261 South. Howell Avenue. 53154", city: "Milwaukee", rating: "3.4", avg_cost: "$10"}
      {name: "Taco City", address: "W186n9539 Bancroft Dr, Menomonee Falls 53051", city: "Milwaukee", rating: "3.5", avg_cost: "$10"}
      {name: "Taco Bell", address: "112 North Chicago Avenue 53172", city: "Milwaukee", rating: "3.4", avg_cost: "$10"}
      {name: "Taco Bell", address: "5630 West North Avenue", city: "Milwaukee", rating: "2.8", avg_cost: "$10"}
    ]
  },
  {
    name: 'Kansas City',
    state: 'MO',
    population: 488943,
    capital: false,
      restaurants: [
      {name: "Taco Republic Truck", address: "1407 Grand Blvd, Kansas City 64106", city: "Kansas City, Missouri", rating: "3.3", avg_cost: "$10"}
      {name: "Ricos Tacos Lupe", address: "802 Southwest Blvd, Kansas City 64108", city: "Kansas City, Missouri", rating: "3.9", avg_cost: "$10"}
      {name: "KC Taco Company", address: "520 Walnut Street, Kansas City 64106", city: "Kansas City, Missouri", rating: "3.2", avg_cost: "$20"}
      {name: "Fuzzy's Taco Shop", address: "10157 Wornall Rd, Kansas City 64114", city: "Kansas City, Missouri", rating: "3.7", avg_cost: "$10"}
      {name: "Queen Taco", address: "11721 E 23rd St, Independence 64050", city: "Kansas City, Missouri", rating: "3.5", avg_cost: "$10"}
      {name: "BRGR Kitchen + Bar", address: "11 East 14th Street, Kansas City 64105", city: "Kansas City, Missouri", rating: "3.5", avg_cost: "$25"}
      {name: "Taco Zone", address: "5939 NE Antioch Road, Kansas City 64119", city: "Kansas City, Missouri", rating: "2.8", avg_cost: "$10"}
      {name: "Taco Via'", address: "1221 NE Rice Rd, Lee's Summit 64086", city: "Kansas City, Missouri", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "9021 East. Highway 350 64133", city: "Kansas City, Missouri", rating: "3.3", avg_cost: "$10"}
      {name: "Taco Bell", address: "5925 Independence Avenue 64125", city: "Kansas City, Missouri", rating: 0, avg_cost: "$10"}
      {name: "Taco John's", address: "811 NW Woods Chapel Road 64015", city: "Kansas City, Missouri", rating: "3.4", avg_cost: "$10"}
    ]
  },
]

module.exports = cityData