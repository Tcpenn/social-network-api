# Social Network Backend

![badmath](https://img.shields.io/badge/License-MIT-informational)

## Description

This program is the basic backend of a social network api using mongoDB. The program allows users to preform CRUD operations on a database containing user, thought, and reaction models

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Technology and Dependencies](#technologi-and-dependencies)
* [License](#license)
* [Roadmap](#roadmap)

## Installation 

First for this program to work you will need to install MongoDB on your computer [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

After MongoDB has been is follow these steps to install the API.

1. Navigate to the root directory you want to clone the repo.
2. Clone the repo from [Github](https://github.com/Tcpenn/social-network-api).
3. In the command line run the code `npm install` to install all required dependencies.
4. Run npm start to start the server.
5. Since the program isn't released to heroku, insomnia will be the program to manipulate the database.
6. Open insomnia or install it here[insomnia](https://insomnia.rest/download). Then navigate to the testing area and put the url `http://localhost:3001/api/users`

## Usage

To make full use of the program with insomnia and the types of requests. 
Video link [here](https://drive.google.com/file/d/1faVhIk_rk4juZAh8OeIXemnrSj8Bsent/view?usp=sharing)

### User Routes

`/api/users` with the property of GET will return all users

`/api/users/<user _id>` with the property of GET will return specific user

`/api/users/` with the POST property and the JSON field filled with the required data will create a new user.

`/api/users/<user _id>` with the PUT property will update that specific user 

`/api/users/<user _id>` with the DELETE property will delete that specific user

### Thought Routes

`/api/thoughts` with the property of GET will return all users

`/api/thoughts/<thought _id>` with the property of GET will return specific user

`/api/thoughts` with the POST property and the JSON field filled with the required data will create a new user.

`/api/thoughts/<thought _id>` with the PUT property will update that specific user

`/api/thoughts/<thought _id>` with the DELETE property will delete that specific user

## Technology and Dependencies
* JavaScript
* Node.js
* Express
* Mongoose

## License

[License](LICENSE.txt)

## Roadmap

Delete all thoughts from a user when a user is deleted.

## Authors

Tyler Pennington

## Credits

[UCF BootCamp](https://github.com/UCF-Coding-Boot-Camp/UCF-VIRT-BO-FSF-PT-06-2021-U-B)
[Mike Tutor](https://github.com/Tutor78)

