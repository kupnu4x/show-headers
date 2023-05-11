// содежимое index.js
const http = require('http')
const port = 3000
const requestHandler = (request, response) => {
    response.end(JSON.stringify({
        headers: request.headers,
        url: request.url,
        remote_addr: request.socket.remoteAddress,
        node_name: process.env.NODE_NAME
    }, null, 2))
    //console.log(request)
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
