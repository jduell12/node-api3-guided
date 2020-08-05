## Middleware

- global middleware
  - applied globally to the server
  - ex express.json() - built in middleware with express
- Router implemented using middleware
- 3 types - depending on how we get it
  - built in
  - third party
    - needs to be installed with npm
    - Morgan: logger
      - captures information of requests
      - use Morgan('dev') to get format
        - GET /route statusCode time - size
    - Helmet: keeps express app secure by making HTML headers
  - custom middleware
    - we write the middleware
- 2 types - depending on how it's used
  - global
    - all requests that come after the middleware is used
  - local
    - applies only to a set of endpoints/routes/routers
    - applies top to bottom, left to right

## Writing Middleware

- req, res, next
  - next routes the response to the next middleware or router etc.
  - can send response before next if there's a problem or if it doesn't need to go to the next middleware
