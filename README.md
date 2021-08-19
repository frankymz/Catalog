The RESTful API I made is here: https://github.com/frankymz/databaseAPI. View the Service.js file here in the src/API folder to see how these were implemented. 

The project is not yet meant to be ran from another device as the data on MySQL Workbench is not accessible remotely as of now.

The client side project structure is a Pages folder and a Components folder.


## Model URIs

### Books

#### GET 

/books : get all books

/bookById/{id} : get book by id

/book/{name} : get book by name

/books/{genre} : get list of books by genre

#### POST

/addBook : add a book

/addBooks : add multiple books

#### PUT

/update : update a book

#### DELETE

/delete/{id} : delete a book by id

### Book Reviews

#### GET

/reviews/{book} :  gets list of reviews for a book

/review/{date} : gets list of reviews from a certain day

#### POST

/addReview : adds a review 

### Users

#### POST

/addUser : adds a user

### User Saved Books

#### GET

/userSaved/{user}/{book} : get user by username and book

/userSaved : get list of all saved books by all users

/userSaves/{user} : get list of books saved by a certain user

#### POST

/addUserSave : add a user saved book

#### DELETE

/deleteById/{id} : delete a user saved book by id


