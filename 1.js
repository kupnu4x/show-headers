// содежимое index.js
const http = require('http')
const port = 3000
const requestHandler = (request, response) => {

    var ret = request.headers;
    ret.url = request.url;
    ret.remote_addr = request.socket.remoteAddress
    response.end(JSON.stringify(ret, null, 2))
    //console.log(request)
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})