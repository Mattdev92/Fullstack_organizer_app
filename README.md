# Organizer Project

Hi ! I've just made my custom organizer app. I've learned how backend works and 
how to connect backend and frontend in simple MERN fullstack app using the same language - javascript: React in front-client side and Express in backend - server side. 

Implemented solutions

Implemented solutions:
 1. Add notes funcionality and saving to the mongo database
 2. Delete notes funcionality from the mongo data base
 3. Upgdate some detail note funcionality in the mongo database
 4. Register funcionality
 5. Login funcionality
 6. Password crypting and authorizing using Jason Web Token
 7. Private routes funcionality - only loged in user has acces for some operations : adding, deleting and updating notes

## How it works

![](organizer.gif)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

After clone this project the only thing you nedd to do to start this application is installing node modules by typing "npm install" in console in backend folder as well as in frontend part of the project. Then start localhost by typing "npm start" in console in frontend part of the project and alson start the backend server in backend part (commend available in json files)

### How did I create this project - Backend 
What things you need to install  and how to install them

Project was prepared using Express framework:

npm install express

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.\
npm install --save-dev nodemon

Mongoose - framework for mongodb\
npm install mongoose

A library to help you hash passwords.\
npm install bcrypt

Json-web-token\
npm install jwt

Body-parser\
npm install body-parser

CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.\
npm install cors

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env\
npm install dotenv

### How did I create this project - Frontend
What things you need to install the software and how to install them

Project was prepared based on CRA template with Bootstrap funcionality.

npx create-react-app my-app --template cra-template-with-bootstrap

React router and React router Dom\
npm install --save react-router react-router-dom

State managment:\
npm install--save react-redux redux

Thunk middleware for Redux. This library enables to use ansyc funcionality with redux\
npm install --save redux-thunk

Promise based HTTP client for the browser\
npm install axios

Node sass\
npm install node-sass

## Authors

* **Mateusz Grzejszczyk** - *Initial work* -

## License
Free licence




