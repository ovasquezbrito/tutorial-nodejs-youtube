const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
	res.send("Hola mundo")
})

app.get("/servicios", (req, res) => {
	res.send("Estas en la página de servicio")
})

app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + "/public/404.html")
})

app.listen(port, () => {
	console.log(`Ejemplo de app ejecutandose la rura http://localhost:${port}`)
})