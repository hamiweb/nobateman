const express = require("express");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Medical Booking API is running"
    });
});

app.use("/api/health", healthRoutes);

module.exports = app;