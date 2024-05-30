// import json-server
// since we are using version 5 in node modules this is the way it should be imported
const jsonServer = require('json-server')
// create server for media-player application
const TODOServer = jsonServer.create()
// create middleware used by server
const middleware = jsonServer.defaults()
// set up route for json file in server
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

TODOServer.use(middleware)
TODOServer.use(route)
TODOServer.listen(PORT,()=>{
    console.log(`todo server started at port ${PORT} and waiting for client request`);
})