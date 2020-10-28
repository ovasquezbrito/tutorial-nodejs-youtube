const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));


app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
	res.status(404).render("404", {titulo: "Página no encontrada"})
})

app.listen(port, () => {
	console.log(`Ejemplo de app ejecutandose la rura http://localhost:${port}`)
})