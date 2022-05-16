const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./data/db.json')
const middlware = jsonServer.defaults({
    static: './build',
})

const post = process.env.PORT || 3001
server.use(middlware)
server.use(
    jsonServer.rewriter({
        '/api/*': "/$1"
    })
)

server.use(router)
server.listen(port, () => {
    console.log("Server Running on port " + port)
})