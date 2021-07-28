Learning Spring with JPA/Hibernate. Will add the URI's in the future.

# Book Catalog API Model URI's

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



https://user-images.githubusercontent.com/63214442/127376151-6c4c4592-6d49-4adb-b64b-87f97e81c942.mp4


