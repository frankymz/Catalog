Learning Spring with JPA/Hibernate. Frontend is made with React.js and database is on MySQL. 

# Book Catalog API 

## Home

1. GET /api/books/{genere}

2. GET /api/list/{user}

and possibly

GET /api/books and make components that sort by rating and price

Interface:

/home

/home/{user}

## Categories

1. GET /api/books/{genre}

Interface:

/home/page?category={genre} or /home/category/{genre}

## Book Details

1. GET /api/books/{id}

2. POST /api/list/{user}

Interface:

/home/book/{id}

## Personal List

Full list

1. GET /api/list/{user}

2. DELETE /api/list/{user}

Interface

/home/list/{user}
