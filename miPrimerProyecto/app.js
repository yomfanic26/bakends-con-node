const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 3001;
const bodyParser = require("body-parser");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 ,// For legacy browser support
    methods:'*'
}
app.use(cors());  // Agrega esta líneanode


app.use(bodyParser.json());
//midelware
app.use("/contactos", (request, response, next) => {
    console.log("Ingrese a midelware");
    console.log("headers",request.headers)
    console.log("body",request.body)

    next();
})


app.get("/contactos", (request, response) => {
    const contactos = [
        { id: 1, nombre: "Jonathan", apellido: "Valencia", celular: "0967565511" },
        { id: 2, nombre: "Juana", apellido: "Valencia", celular: "1234567" },
        { id: 3, nombre: "Pepe", apellido: "Turco", celular: "9874561" }

    ];
  response.send(contactos)
})

app.post("/contactos",(req, resp) => {
    req.body.id=99;
    resp.send(req.body)

})
app.put("/contactos/:idParam",(req, resp) => {
    const id=req.params.idParam;
    console.log("id",id);
    resp.send(req.body);
})
app.delete("/contactos/:idParam", (req, resp) => {
    const id=req.params.idParam;
    console.log("id:",id);
    resp.send()
})
//ñevant aun servidor web en mi computador local y recibe dos parametros
app.listen(puerto, () => {
    console.log("Servidor listo en el puerto " + puerto)
});