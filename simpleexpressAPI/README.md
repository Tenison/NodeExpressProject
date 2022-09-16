### node js/express api to query data from a server

##### install node packages in package.json

##### run command: "node run dev" to test out some of the api endpoints 

API stands for application programming interface. A way to connect two applications. (A server-side application(API) and a client-side application(client-facing))

APIs are stateless, meaning both server and client don't need to store any information or data about each other before communicating.

Each request is independent.

### TYPES OF API REQUEST

GET -> Read/get data from server/db
POST -> Create/Put new information/data on server/db
PATCH -> Update information on server/db
DELETE -> Remove data from server/db

### MIDDLEWARE

middleware always run before any endpoint request is made on the server 

```js
    app.use()
    //example 
    app.use(express.json())
```

### STARTING SERVER SIDE API
```js
    //This initializes API to run on the server with a port specified 
    app.listen(4000, () =>{console.log("Server Started")})
```

##### very simple. I will update this document as and when 