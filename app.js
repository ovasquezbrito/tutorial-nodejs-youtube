const http = require('http')

const server = http.createServer((req, res) => {
	console.log("respuesta del servidor")
	res.end("estoy respondiendo a tu solisitud v.1")
})

const puerto = 3000

server.listen(puerto, () => {
	console.log("escuchando solicitudes")
})