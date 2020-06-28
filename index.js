const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes } = require('./routes');
const { NotFoundMiddleware } = require('./middleware');

// Middleware para definir la carpeta publica 
server.use(express.static('./public'));
// Manejar las peticiones post en formato json
server.use(express.json());
// Se importan las rutas
server.use("/", HomeRoutes);
// Se llama el middleware creado para rutas que no existan
server.use(NotFoundMiddleware);

// Se inicia el server en el puerto que viene de config
server.listen(PORT,()=>{
    console.log(`Application running on PORT ${PORT}`);
});