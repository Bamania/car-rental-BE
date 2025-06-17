"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
const authenticate = (req, res, next) => {
    const authCookie = req.cookies['authcookie'];
    if (!authCookie) {
        return res.status(401).json({ message: 'Authorization authCookie is required.' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(authCookie, JWT_SECRET);
        console.log("middleware verification ", decoded);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
};
exports.authenticate = authenticate;
