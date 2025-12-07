Node.js REST API for Students

A simple REST API built with Node.js and Express to manage student records using JSON file storage. This project demonstrates CRUD operations (Create, Read, Update, Delete) and serves as a foundational example for building RESTful APIs.

Features

Create, read, update, and delete student records

Store data in a JSON file (students.json)

RESTful API design with standard HTTP methods

Easy to test with curl, Postman, or any HTTP client

Prerequisites

Node.js
 v14 or higher

npm (comes with Node.js)

Installation

Clone the repository:

git clone https://github.com/yourusername/rest-api-node.git
cd rest-api-node


Install dependencies:

npm install


Create a data folder and an empty JSON file:

mkdir data
echo "[]" > data/students.json


Start the server:

node server.js

The server will run at http://localhost:5000.

Usage

The API is accessible at http://localhost:5000/api/students
. You can interact using curl, Postman, or any HTTP client.

API Endpoints
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/:id	Get a student by ID
POST	/api/students	Create a new student
PUT	/api/students/:id	Update a student by ID
DELETE	/api/students/:id	Delete a student by ID

Examples
1. Create a student
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice"}' http://localhost:5000/api/students


Response:

{
  "id": 1765131639140,
  "name": "Alice"
}

2. Get all students
curl http://localhost:5000/api/students


Response:

[
  {"id":1765131639140,"name":"Alice"}
]

3. Get a student by ID
curl http://localhost:5000/api/students/1765131639140


Response:

{
  "id": 1765131639140,
  "name": "Alice"
}

4. Update a student
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice Updated"}' http://localhost:5000/api/students/1765131639140


Response:

{
  "id": 1765131639140,
  "name": "Alice Updated"
}

5. Delete a student
curl -X DELETE http://localhost:5000/api/students/1765131639140


Response:

{
  "message": "Student deleted"
}

Postman Collection

Screenshots

Get All Students

![1](https://github.com/user-attachments/assets/9cd73dae-dd04-4b66-80af-97943d15d085)

Create Student

![2](https://github.com/user-attachments/assets/539ed780-8834-4a7e-969a-ce4102134172)

Update Student

![3](https://github.com/user-attachments/assets/b2cb1afc-12c3-4a79-a4ed-dc791bc50cea)

![4](https://github.com/user-attachments/assets/e71ba0b1-871c-4071-8bc9-e9ce6ffc64e5)


Delete Student

![5](https://github.com/user-attachments/assets/51634f7c-f370-4389-9b92-13a67ee0318d)
