import { prisma } from "./prisma";

const user = prisma.user.create({
    data:{
        where:{
            
        }
    }
})