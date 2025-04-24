require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const notificationRoutes = require("./routes/notificationRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/notifications", notificationRoutes);

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(PORT, () =>
            console.log(`🚀 Server running on port ${PORT}`)
        );
    })
    .catch((err) => console.error("MongoDB connection error:", err));
