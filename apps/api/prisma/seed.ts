import { faker } from "@faker-js/faker";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const users = Array.from({ length : 10 }).map(()=>({
        username: faker.person.firstName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        contactNumber: faker.phone.number(),
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