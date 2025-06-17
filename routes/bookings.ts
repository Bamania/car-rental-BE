import express from "express";
import { prisma } from "../lib/db";
import { authenticate } from "../middleware/authenticate";

//made this interface as user doesnt exist in the native Request 
declare global {
  namespace Express {
    interface Request {
      user?:{
        userId:number
        name:string
        email:string
      };
    }
  }
}

interface AvailabilityCheck {
  carId: number;
  pickupDate: string;
  dropoffDate: string;
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
    if (req.user.userId !== userId) {
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
    console.log("Authenticated user:", req.user);

    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    
    const { pickupDate, dropoffDate, pickupLocation, totalPrice, carId } = req.body.formData;

    
    

      // Create the booking
      const newBooking = await prisma.bookingInfo.create({
        data: {
          userId: req?.user?.userId,
          carId:parseInt(carId),
          pickupDate,
          dropoffDate,
          pickupLocation,
          createdAt: new Date(),
          totalPrice,
        },
      });

      if (!newBooking || !newBooking.id) {
        throw new Error("Booking creation failed");
      }
    

    res.status(201).json({ 
      message: "Booking created successfully", 
     
      success: true 
    });

  } catch (err) {
    console.error("Error creating booking:", err);
    
    if (err instanceof Error && err.message === "Car was just booked by another user") {
      return res.status(409).json({ 
        error: err.message,
        success: false 
      });
    }
    
    res.status(500).json({ 
      error: "Internal Server Error",
      success: false 
    });
  }
});


router.post('/check-availability', async (req, res) => {
  try {
    const { carId, pickupDate, dropoffDate }: AvailabilityCheck = req.body;
    
    const errors = await checkCarAvailability({ carId, pickupDate, dropoffDate });
    
    if (errors!.length > 0) {
      return res.json({
        available: false,
        errors: errors
      });
    }
    
    res.json({
      available: true,
      message: "Car is available for selected dates"
    });
    
  } catch (error) {
    console.error('Availability check error:', error);
    res.status(500).json({
      available: false,
      errors: ['Unable to check availability. Please try again.']
    });
  }
});


const checkCarAvailability = async (data: AvailabilityCheck) => {
  const errors: string[] = [];
  
  // 1. Check if car exists
  const car = await prisma.carInfo.findUnique({
    where: { id: data.carId }
  });
  
  if (!car) {
    errors.push("Selected car is no longer available");
    return errors;
  }
  
  // 2. Check for overlapping bookings
  const overlappingBookings = await prisma.bookingInfo.findMany({
    where: {
      carId: data.carId,
      AND: [
        {
          pickupDate: {
            lt: data.dropoffDate
          }
        },
        {
          dropoffDate: {
            gt: data.pickupDate
          }
        }
      ]
    }
  });
    if (overlappingBookings.length > 0) {
    errors.push("Car is not available for selected dates");
  }

  // 3. Validate date logic
  const pickup = new Date(data.pickupDate);
  const dropoff = new Date(data.dropoffDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day

  if (pickup < today) {
    errors.push("Pickup date cannot be in the past");
  }

  if (dropoff <= pickup) {
    errors.push("Drop-off date must be after pickup date");
  }

  // 4. Check for reasonable booking duration (optional business rule)
  const maxDays = 30; // Maximum 30 days rental
  const daysDiff = Math.ceil((dropoff.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24));
  
  if (daysDiff > maxDays) {
    errors.push(`Rental period cannot exceed ${maxDays} days`);
  }

  return errors;
};

export default router;
