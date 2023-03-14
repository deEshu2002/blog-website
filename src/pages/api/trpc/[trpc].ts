import * as trpcNext from "@trpc/server/adapters/next";
import { env } from "process";
import { appRouter } from "@/server/routers/_app";

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
});