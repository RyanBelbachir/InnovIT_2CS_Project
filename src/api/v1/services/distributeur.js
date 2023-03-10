import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const allUsers = await prisma.users.findMany()

console.log(allUsers)
