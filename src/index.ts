import express from "express";
import router from "@routes/AllRoutes";

const app = express();

// middleware
app.use(express.json());

// rutas
app.use('/api', router);

// iniciar el servidor
const PORT = Bun.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}/api`);
});