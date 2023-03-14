import  {z} from "zod";
import { prisma } from "../db";
import { procedure, router } from "../trpc";

export const appRouter = router({
    hello: procedure.input(z.object({text: z.string()})).query(({input}) => {
        return {
            inserteddata:  `hello ${input.text}`,
        };
    }),
    
    insertPost: procedure.input(z.object({title:z.string(), content:z.string(),author:z.string()})).query(async (input) => {
        const newBlog = await prisma.post.create({
            data:{
                title: input.input.title,
                content: input.input.content,
                author: input.input.author,
            }
        })
        return Promise.resolve(newBlog);
    }),

    getAll:procedure.query(async ({ctx}) => {
        const allData = await prisma.post.findMany();
        
        return Promise.resolve(allData);
    })
})