import { createTRPCRouter } from "./trpc";
import { handlePostRouter } from "./routes/handlePost";

export const appRouter = createTRPCRouter({
    handlePost: handlePostRouter,
});

export type appRouter = typeof appRouter;
