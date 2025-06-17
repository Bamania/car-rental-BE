"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../lib/db");
const authenticate_1 = require("../middleware/authenticate");
const router = express_1.default.Router();
// GET route to fetch user's bookings
router.get("/book/:userId", authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const bookings = yield db_1.prisma.bookingInfo.findMany({
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
    }
    catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
router.post("/book", authenticate_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("Authenticated user:", req.user);
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }
        const { pickupDate, dropoffDate, pickupLocation, totalPrice, carId } = req.body.formData;
        // Create the booking
        const newBooking = yield db_1.prisma.bookingInfo.create({
            data: {
                userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId,
                carId: parseInt(carId),
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
    }
    catch (err) {
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
}));
router.post('/check-availability', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId, pickupDate, dropoffDate } = req.body;
        const errors = yield checkCarAvailability({ carId, pickupDate, dropoffDate });
        if (errors.length > 0) {
            return res.json({
                available: false,
                errors: errors
            });
        }
        res.json({
            available: true,
            message: "Car is available for selected dates"
        });
    }
    catch (error) {
        console.error('Availability check error:', error);
        res.status(500).json({
            available: false,
            errors: ['Unable to check availability. Please try again.']
        });
    }
}));
const checkCarAvailability = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = [];
    // 1. Check if car exists
    const car = yield db_1.prisma.carInfo.findUnique({
        where: { id: data.carId }
    });
    if (!car) {
        errors.push("Selected car is no longer available");
        return errors;
    }
    // 2. Check for overlapping bookings
    const overlappingBookings = yield db_1.prisma.bookingInfo.findMany({
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
});
exports.default = router;
