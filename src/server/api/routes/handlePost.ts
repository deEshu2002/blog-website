import { z } from "zod";

import { createTRPCRouter, procedure} from "../trpc";

export const handlePostRouter = createTRPCRouter({
    hello: procedure.input(z.object({text: z.string()})).query(({input}) => {
        return {
            greeting:  `Hello ${input.text}`,
        };
    }),

    getAll:procedure.query(({ ctx }) => {
        // return ctx.prisma.example.findMany();
    })
})