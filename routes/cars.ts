import express from "express"
import { prisma } from "../lib/db"

const router = express.Router()

router.get('/cars', async (req, res) => {
  try {
    const response = await prisma.carInfo.findMany()
    console.log("response->", response)
    
    // Send the response back to the client
    res.json(response)
  } catch (error) {
    console.error("Error fetching cars:", error)
    res.status(500).json({ error: "Failed to fetch cars" })
  }
})

export default router