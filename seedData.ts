import { prisma } from "./lib/db";

import {Cardata} from "./mockdata/index"

const length=Cardata.length;


async function seedData() {
  try {
    const length = Cardata.length;

    for (let i = 0; i < length; i++) {
      await prisma.carInfo.create({ data: Cardata[i] });
      console.log(`Created car ${i + 1}/${length}`);
    }

    console.log("Finished seeding data successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedData();