import  {z} from "zod";
import { prisma } from "../db";
import { procedure, router } from "../trpc";

export const appRouter = router({
    hello: procedure.input(z.object({text: z.string()})).query(async ({input}) => {

        // const newBlog = await prisma.post.create({
        //     data:{
        //         author:"Tester",
        //         authorId:3,
        //         title:"Testers Test",
        //         content:"hello hello this is the test paragraph that should be long enough to take all the space given to it so that i can test well this",
        //         id:4,
        //     }
        // })

        return {
            inserteddata:  "hellow",
        };
    }),

    getAll:procedure.query(async ({ ctx }) => {
        const allData = await prisma.findOne({where:{id:1},select:{title:true}});
        
        return allData;
    })
})