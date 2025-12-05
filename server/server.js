import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRoter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

const app = express();

// 1. DB Connect (mit Error Handling für Vercel)
await connectDB();

// 2. CORS - Als allererstes Middleware!
// Wir setzen origin auf "*" oder die URL, aber Vercel übernimmt jetzt die Hauptarbeit.
// WICHTIG: Wenn Vercel die Header setzt, darf Express sie nicht "blockieren".
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));

// 3. JSON Parser
app.use(express.json());

// 4. Test Route
app.get("/", (req, res) => res.send("Server is running"));

// 5. Routes
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRoter);
app.use('/api/bookings', bookingRouter);

// 6. Export für Vercel
export default app;