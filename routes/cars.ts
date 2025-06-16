import express, { Request, Response } from "express";
import { prisma } from "../lib/db";

const router = express.Router();

// Fetch all cars
router.get('/cars', async (req: Request, res: Response) => {
  try {
    const response = await prisma.carInfo.findMany();

    
   
    res.json(response);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});




export default router;