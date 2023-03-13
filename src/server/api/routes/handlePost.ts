import { z } from "zod";
import { createTRPCRouter, procedure} from "../trpc";
import { prisma } from "@/server/db";

export const handlePostRouter = createTRPCRouter({
    hello: procedure.input(z.object({text: z.string()})).query(({input}) => {

        const newBlog = prisma.post.create({
            data:{
                author:"Tester",
                authorId:1,
                title:"Testers Test",
                content:"hello hello this is the test paragraph that should be long enough to take all the space given to it so that i can test well this",
                id:1,
            }
        })

        return {
            inserteddata:  newBlog,
        };
    }),

    getAll:procedure.query(({ ctx }) => {
        // return ctx.prisma.example.findMany();
        const allData = prisma.post.findMany();
        
        return allData;
    })
})