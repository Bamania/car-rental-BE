"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const cars_1 = __importDefault(require("./routes/cars"));
const bookings_1 = __importDefault(require("./routes/bookings"));
const auth_1 = __importDefault(require("./routes/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const Port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.use("/auth", auth_1.default);
app.use("/api", cars_1.default);
app.use("/api", bookings_1.default);
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
