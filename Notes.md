## Middleware

- global middleware
  - applied globally to the server
  - ex express.json() - built in middleware with express
- Router implemented using middleware
- 3 types - depending on how we get it
  - built in
  - third party
    - needs to be installed with npm
  - custom middleware
    - we write the middleware
- 2 types - depending on how it's used
  - global
    - all requests that come after the middleware is used
  - local
    - applies only to a set of endpoints/routes/routers
