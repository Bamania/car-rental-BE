import express from "express";
import { prisma } from "../lib/db";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

router.post("/book", authenticate,async (req, res) => {
  try {
    console.log(req.body  )
        console.log("Authenticated user:", req.user); 
    const {
      pickupDate,
      dropoffDate,
      pickupLocation,
     userId,
      totalPrice,
      carId,
 
    } = req.body.formData;

    const date = new Date();

    const booking = await prisma.bookingInfo.create({
      data: {

        userId,
        carId,
        pickupDate,
        dropoffDate,
        pickupLocation,
       
        createdAt: date,
        totalPrice,
      },
    });

    res.status(201).json({ message: "Booking created", booking });
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
