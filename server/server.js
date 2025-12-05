import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRoter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Connect Database
await connectDB();


// CORS 
app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));

app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRoter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;

// Nur starten, wenn wir NICHT in der Vercel-Umgebung sind
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// --- WICHTIG FÜR VERCEL ---
// Damit Vercel die App als Serverless Function ausführen kann
export default app;