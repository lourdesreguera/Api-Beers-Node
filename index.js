const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./src/utils/database/database');
const beersRoutes = require('./src/api/beers/beers.routes');

dotenv.config();
db.connectDb();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // permitimos que nuestro servidor codifique y decodifique en json
app.use(express.urlencoded({ extended: true })); // configuramos que nuestro servidor confirme que el body tiene el content-type correcto
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE"); // permitimos las siguientes operaciones en el servidor
    res.header("Access-Control-Allow-Credentials", "true"); // permitimos que haya credenciales en nuestras peticiones
    res.header("Acces-Control-Allow-Headers", "Content-Type"); // definimos el tipo de cabecera que vamos a permitir
    next();
});

app.use(cors({
    origin: '*', // en un futuro declararemos un array con posibles rutas
    credentials: true
}));

app.use('/beers', beersRoutes);

app.use('*', (req, res, next) => {
    return res.status(404).json('Route not found');
});

app.use((error, req, res) => {
    return res.status(error.status || 500).json(error.message || "Unexpected error");
});

app.listen(PORT, () => {
    console.log(`Listenning in http://localhost:${PORT}`);
});