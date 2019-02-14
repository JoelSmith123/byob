# byob

This database serves up taco restaurants for every major city in the United States.

These set up instructions assume that you already have the following installed:

## Technologies/Dependencies
- Node.js
- Express
- Knex.js
- Heroku
- Mocha
- Chai 
- Chai-http
- PostgreSQL
- Body-parser

## Installation and Contribution Instructions

#### Install and Start Server

* Begin by forking this repo using the Fork button in the top-right corner of this screen.

* `git clone https://github.com/YOUR_GITHUB_USERNAME/byob.git`

* `cd byob`

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `psql CREATE DATABASE cities_restaurants;`

* `knex migrate:latest`

* `knex seed:run`

#### Run tests 
* `npm test`

#### Run eslint
* `npm run eslint`

### API Endpoints
#### Cities
```
GET /api/v1/cities // get all cities
--> returns an array of city objects

POST /api/v1/cities  // create a new city

GET /api/v1/cities/:id // get a specific city
--> returns array with specific city object

PUT /api/v1/cities/:id  // edit a city object

DELETE /api/v1/cities/:id  // delete a city
```
#### Taco Restaurants
```
GET /api/v1/restaurants // get all taco restaurants
--> returns an array of taco restaurant objects

GET /api/v1/restaurants/:id // get a specific taco restaurant

PUT /api/v1/restaurants/:id // edit a taco restaurant object

DELETE /api/v1/restaurants/:id // delete a taco restaurant

GET /api/v1/cities/:id/restaurants // get all taco restaurants in a specific city
--> returns an array of taco restaurant objects

POST /api/v1/cities/:id/restaurants // create a new taco restaurant in a specific city
```

## To Contribute to the Project:

- Follow the installation instructions above to install and start the server on your machine.

- GitHub Issues for this project: (https://github.com/JoelSmith123/byob/issues)

- To send a Pull Request via GitHub:
    - Checkout into a new branch
    - Please make sure to write tests for any additions to the front end
    - Please make sure all tests are passing before making a pull request
    - Push changes up to the forked repo
    - Before submitting, rebase your work on the current master branch
    - Make a pull request to the original repo
    - Include a commit message that describes your work in detail

## Project Requirements
 * [Project spec](http://frontend.turing.io/projects/build-your-own-backend.html)
 * [Backend Checklist](http://frontend.turing.io/projects/byob/backend-feature-checklist.html)

## Contributors
 * Kylie Stanley [GitHub](https://github.com/kyliestanley) [LinkedIn](https://www.linkedin.com/in/kyliestanley/)
 * Joel Smith [GitHub](https://github.com/JoelSmith123) [LinkedIn](https://www.linkedin.com/in/joelsmith123/) 
