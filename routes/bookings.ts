import express from "express";
import { prisma } from "../lib/db";
import { authenticate } from "../middleware/authenticate";

//made this interface as user doesnt exist in the native Request 
declare global {
  namespace Express {
    interface Request {
      user?: number;
    }
  }
}

const router = express.Router();

// GET route to fetch user's bookings
router.get("/book/:userId", authenticate, async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);

    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Verify the authenticated user is requesting their own bookings
    if (req.user !== userId) {
      return res
        .status(403)
        .json({ error: "Access denied: Can only view your own bookings" });
    }

    const bookings = await prisma.bookingInfo.findMany({
      where: {
        userId: userId,
      },
      include: {
        car: true,
      },
      orderBy: {
        createdAt: "desc", // Most recent first
      },
    });

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/book", authenticate, async (req, res) => {
  try {
    // console.log(req.body);
    console.log("Authenticated user:", req.user);

    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const userId = req.user;

    const { pickupDate, dropoffDate, pickupLocation, totalPrice, carId } =
      req.body.formData;

    const date = new Date();

    const booking = await prisma.bookingInfo.create({
      data: {
        userId: userId,
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
