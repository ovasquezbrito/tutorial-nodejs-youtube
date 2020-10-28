const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
	res.render("mascotas", {
        arrayMascotas: [
            {id: 'jdjdjdj', name:'rex', description: 'rex decripción'},
            {id: 'kdkdkdk', name:'braco', description: 'braco decripción'},
            {id: 'gdgdgdg', name:'chupeta', description: 'chupeta decripción'},
        ]
    })
})


module.exports = router;