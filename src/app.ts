import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
require('dotenv').config(); // Get env variable
import initializeRoutes from "./routes/initializeRoutes"; // routes
import { mongooseConnection } from "./utils/dbConnection"; // Mongo

// Initialize
export const app = express(); // Create Server

// Settings
app.set("port", process.env.PORT || 3002); // Port


// Middlewares
app.use(express.json()); // Interprate JSON that server recive - OR use-> bodyParser.json()
app.use(express.urlencoded({ extended: true })); // Receive Data from Form and convert to Object - OR use bodyParser.urlencoded
app.disable('x-powered-by'); // Set to secutiry server
app.use(morgan("tiny")); // Show through the console all the request at server

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

// Routes
initializeRoutes(app);
// DB Connection
mongooseConnection(process.env.MONGODB_URI);

app.get("/*", (req: Request, res: Response) => {
    res.status(404).send("URL NOT FOUND");
});
app.post("/*", (req: Request, res: Response) => {
    res.status(404).send("URL NOT FOUND");
});

export default app;