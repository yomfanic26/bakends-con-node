const express = require("express");
const app = express();
const puerto = 3002;
const bodyParser = require("body-parser");


app.use(bodyParser.json());
//midelware
app.use("/laptos", (request, response, next) => {
    console.log("Ingrese a midelware");
    console.log("headers", request.headers)
    console.log("body", request.body)

    next();
})
//recuper auna laptops en funcion de su codigo
app.get("/laptos/:idParam", (solicitud, respuesta) => {
    const laptops = [
        { id: 100, marca: "Lenovo", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 2, marca: "HP", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 3, marca: "Toshiba", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 4, marca: "Dell", procesador: " Intel core i5", memoria: "16 GB", disco: "1 TB" },
    ];
    const idBuscado = parseInt(solicitud.params.idParam);
    const laptopEncontrada = laptops.find(laptop => laptop.id === idBuscado);
    respuesta.send(laptopEncontrada);
})
//recuperar todas las laptops
app.get("/laptos", (request, response) => {
    const laptops = [
        { id: 100, marca: "Lenovo", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 2, marca: "HP", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 3, marca: "Toshiba", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },
        { id: 4, marca: "Dell", procesador: "Intel core i5", memoria: "16 GB", disco: "1 TB" },


    ];
    response.send(laptops)
})

app.post("/laptos", (req, resp) => {
    req.body.id = 500;
    resp.send(req.body)

})
//editar
app.put("/laptos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id", id);
    resp.send(req.body);
})
//eliminar
app.delete("/laptos/:idParam", (req, resp) => {
    const id = req.params.idParam;
    console.log("id:", id);
    resp.send()
})
//ñevant aun servidor web en mi computador local y recibe dos parametros
app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + puerto)
});