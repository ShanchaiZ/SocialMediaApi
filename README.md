# SocialMediaApi

# Description:

A social media app created with a REST API that is built with Express, Mongoose, and MongoDB.

# User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

# Usage:

1. Ensure you have MongoDB installed.
2. Install Dependencies with `npm i`
3. Run `npm start` to make the run the server and live changes to the API
4. Use a browser or an app like Insomnia to test the rest API.

# Endpoints

User

* Get all users: GET /api/users
* Create a user: POST /api/users
* Get user by ID: GET /api/users/:id
* Update a user: PUT /api/users/:id
* Delete a user: DELETE /api/users/:id
* Add a friend: PUT /api/users/:userId/friends/:friendId
* Delete a friend: DELETE /api/users/:userId/friends/:friendId

Thought

* Get all thoughts: GET /api/thoughts
* Create a thought: POST /api/thoughts
* Get thought by ID: GET /api/thoughts/:id
* Update a thought: PUT /api/thoughts/:id
* Delete a thought: DELETE /api/thoughts/:id

# Packages:

* express
* MongoDB
* Mongoose
* Sequelize

# Walkthrough

https://drive.google.com/file/d/1imDsCPVin1dkZNjA5Nd3jasXr1PYrL-x/view