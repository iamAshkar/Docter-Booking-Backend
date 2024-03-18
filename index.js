const jsonserver = require('json-server')
const docServer = jsonserver.create()
const router = jsonserver.router('db.json')
const middleware =jsonserver.defaults()
const port = 3001
docServer.use(middleware)
docServer.use(router)
docServer.listen(port,()=>{
    console.log("Docter server listerning on the port"+ port);
})