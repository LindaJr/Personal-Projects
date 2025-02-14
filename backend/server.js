import express from "express";
import dotenv from "dotenv";

import authRoutes from 'backend\routes\auth.routes.js'; // Ensure the correct extension
import connectMongoDB from 'backend\db\connectMongoDB.js'; // Ensure the correct extension

dotenv.config();

const app = express();
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Use backticks for template literals
    connectMongoDB();
});