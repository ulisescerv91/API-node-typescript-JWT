import express, { Request, Response } from "express";
require('dotenv').config();//Get env variable

// Initialize
export const app = express(); // Create Server

// Settings
app.set("port", process.env.PORT || 3002); // Port

app.get("/*", (req: Request, res: Response) => {
    res.status(404).send("URL NOT FOUND");
});

export default app;