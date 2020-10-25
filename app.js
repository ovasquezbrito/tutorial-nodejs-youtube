const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));



app.get("/", (req, res) => {
	res.render("index", {titulo: "mi titulo dinámico"})
})

app.get("/servicios", (req, res) => {
	res.render("servicios", {titulo: "mi titulo dinámico de servicios"})
})

app.use((req, res, next) => {
	res.status(404).render("404", {titulo: "Página no encontrada"})
})

app.listen(port, () => {
	console.log(`Ejemplo de app ejecutandose la rura http://localhost:${port}`)
})