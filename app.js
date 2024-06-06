import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    // //user create
    // const user = await prisma.user.create({
    //     data: {
    //         email: `arindammajumder${Math.random()}@gmail.com`,
    //         name: "Arindam Majumder",
    //         password: "12345678",
    //     },
    // });

    //get all users count
    // const users = await prisma.user.count();
    
    //get all users 
    // const users = await prisma.user.findMany();
    
    //get one user by id or unique col
    // const user = await prisma.user.findUnique({
    //     where : {
    //         id : "4b589fa9-163a-400f-a584-fe2d2649c3f2"
    //     }
    // });
    
    //get one user by id or unique col
    // const user = await prisma.user.findFirst({
    //     where : {
    //         name : "hlaing min than"
    //     }
    // });
    
    //create many records
    // const usersToCreate = [
    //     {
    //       email: "john.doe@example.com",
    //       name: "John Doe",
    //       password: "password123",
    //     },
    //     {
    //       email: "jane.smith@example.com",
    //       name: "Jane Smith",
    //       password: "pass@123",
    //     },
    //     {
    //       email: "robert.brown@example.com",
    //       name: "Robert Brown",
    //       password: "securepwd",
    //     },
    //     // Add more user objects as needed
    //   ];

    // const users = await prisma.user.createMany({
    //     data : usersToCreate,
    //     skipDuplicates : true
    // });

    //update record
    // const updatedUser = await prisma.user.update({
    //     where: {
    //       id: "f36f7cd1-bfd5-497e-9ad5-c0ad35086afd",
    //     },
    //     data: {
    //       name: "Hello world",
    //     },
    // });

    const deletedUser = await prisma.user.delete({
        where: {
          id: "f36f7cd1-bfd5-497e-9ad5-c0ad35086afd",
        },
    });
    console.log(deletedUser);
}
  
main()
.catch((e) => {
    throw e;
})
.finally(async () => {
    await prisma.$disconnect();
});