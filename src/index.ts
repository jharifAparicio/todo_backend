import express from "express";

const app = express();

// middleware
app.use(express.json());

// rutas
app.get("/", (req, res) => {
    res.send("Hello World");
})

// iniciar el servidor
const PORT = Bun.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});