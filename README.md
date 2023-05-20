This repository contains a NoSQL database schema for a library management system using MongoDB. The schema includes sample data for books, including their names and authors.

Database Schema
The database schema consists of a single collection: books.

Books Collection
The books collection stores information about the books in the library.

name: Name of the book.
author: Author(s) of the book.
Sample Book Data
The repository includes sample book data that can be imported into the MongoDB database.

books.json
The books.json file contains a JSON array with objects representing individual books. Each book object contains the following fields:
[
  {
    "name": "Book 1",
    "author": "Author 1"
  },
  {
    "name": "Book 2",
    "author": "Author 2"
  },
  {
    "name": "Book 3",
    "author": "Author 3"
  }
]
Feel free to modify the sample data or add more books as per your library's requirements.

Getting Started
To use this database schema and import the sample book data into your MongoDB database:

Install MongoDB: If you haven't already, download and install MongoDB from the official MongoDB website.

use library_management
Import the sample data: Import the books.json file into your MongoDB database using the mongoimport command
mongoimport --db library_management --collection books --file books.json

This will import the sample book data into the books collection of your library_management database.
