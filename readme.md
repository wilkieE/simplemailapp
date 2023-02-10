# Simple Mail Application

A simple messaging app that allows a predefined user to manage their messages. The frontend of the application is built with React using a Vite template and the backend is built with Node.js and Express.

## Features

- The top bar of the app indicates the number of unread messages and the name of the user.

- The application consists of three pages:

- A page that displays the list of messages.

- A page to view the details of a message.

- A page to update the status of a message (read/unread).

- APIs for managing messages have been defined in a separate Swagger document.

## Getting Started

To get started with the Simple Mail Application, you need to clone this repository and install the required dependencies. You can run the following command in to clone the repository.
`git clone https://github.com/wilkiee/simple-mail-application.git`

You would then need to open terminals in both the client and server directories and install the required dependencies
`cd ./server`
`npm install`

`cd ./client`
`npm install`

Once you have installed the dependencies, you can start the development server for the server using
`npm start`

And for the client using
`npm run dev`

This will start the development server and you can access the Mail Application at http://localhost:5173.

## Swagger Document

The APIs for managing messages have been defined in a separate Swagger document located in the /docs directory. You can view the document in swaggerUI by visiting
http://localhost:3000/api-docs in your browser once you have the server running.

## Limitations

The user is predifined at the top level app component for the purpose of this assignment. Only the predefined user is able to manage their messages because this username is a parameter for the API call. However this is only a mock app, as the assignment specifically outlined the 3 pages so auth is not implemented.
