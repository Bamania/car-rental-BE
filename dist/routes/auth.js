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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../lib/db");
const authenticate_1 = require("../middleware/authenticate");
const router = express_1.default.Router();
// JWT secret (in production, use environment variable)
const JWT_SECRET = process.env.JWT_SECRET;
// JWT verification middleware
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { name, email, phoneNumber, password } = req.body.formData;
        if (!name || !email || !phoneNumber || !password) {
            return res.status(400).json({ error: "All fields (name, email, phoneNumber, password) are required." });
        }
        // Check if user already exists
        const existingUser = yield db_1.prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists." });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield db_1.prisma.user.create({
            data: {
                name,
                email,
                phoneNumber,
                password: hashedPassword,
            }
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: newUser.id, email: newUser.email, name: newUser.name }, JWT_SECRET, { expiresIn: '24h' });
        res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });
        res.status(200).json({
            message: "registered"
        });
    }
    catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body.formData;
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }
        const user = yield db_1.prisma.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password." });
        }
        // Compare password
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password." });
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '24h' });
        res.cookie('authcookie', token, { maxAge: 900000, httpOnly: true });
        res.status(200).json({
            message: "success"
        });
    }
    catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}));
router.post("/logout", (req, res) => {
    res.clearCookie("auth");
    res.json({ message: "Logged out!" });
});
// this route is only to check the login status !
router.get("/me", authenticate_1.authenticate, (req, res) => {
    var _a, _b, _c;
    const token = req.cookies.authcookie;
    if (token) {
        res.json({ loggedIn: true, userId: (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.userId, userName: (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.name, userEmail: (_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.email });
    }
    else {
        res.json({ loggedIn: false });
    }
});
exports.default = router;
