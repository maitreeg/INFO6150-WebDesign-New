
# Assignment 8

- Author: Maitree Gawande
- NUID: 002727522
- Email: gawande.m@northeastern.edu

## Topic: Assignment 8 (Node, Express & MongoDB)
Assignment 8 based on user authentication, CRUD operations involving storing password to MongoDB using encryption.

## API Endpoints:

User Creation
Endpoint: POST: /user/create
Function: Creates a new user with full name, email, and password. Implement validations for email, full name, and enforce a strong password rule.

Update User Details
Endpoint: PUT: /user/edit
Function: Allows updating the user's full name and password. Email cannot be updated. Validate full name and password, and ensure the user exists in the database before updating.


Delete User
Endpoint: DELETE: /user/delete
Function: Deletes a user by their email.


Retrieve All Users
Endpoint: GET: /user/getAll
Function: Retrieves all users' full names, email addresses, and passwords stored in the
database.


Upload Image
Endpoint: POST: /user/uploadImage
Function: Allows users to upload an image file to the server. It only accepts JPEG, PNG, and GIF formats. Use multer for file handling. Store the uploaded image in an "images" folder and save the path in the database.
Response: Confirmation of upload with the file path.


## Technology & Softwares:

1. MongoDB
2. Express
3. NodeJS

Commonly used packages:
1. bcrypt
2. mongoose
3. express
4. multer


## Installation:

Running the server
1. Clone the repository on your local machine
2. Install the packages by running the command *npm install* (at the root of the directory)
3. Run the app by running the command *npm start*

* Use postman to test the API endpoints
* Install MongoDB community edition server and create a local database
