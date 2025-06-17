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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./lib/db");
const index_1 = require("./mockdata/index");
function seedData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const length = index_1.Cardata.length;
            for (let i = 0; i < length; i++) {
                yield db_1.prisma.carInfo.create({ data: index_1.Cardata[i] });
                console.log(`Created car ${i + 1}/${length}`);
            }
            console.log("Finished seeding data successfully!");
        }
        catch (error) {
            console.error("Error seeding data:", error);
        }
        finally {
            yield db_1.prisma.$disconnect();
        }
    });
}
seedData();
