import { faker } from "@faker-js/faker";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const users = Array.from({ length : 10 }).map(()=>({
        username: faker.internet.username(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
    }))


    await prisma.user.createMany({
        data: users,
    })

    console.log("Seeding Completed");
}

main().then(()=>{
    prisma.$disconnect();
    process.exit(0);
}).catch((error) => {
    prisma.$disconnect();
    console.error(error);
    process.exit(1);
})