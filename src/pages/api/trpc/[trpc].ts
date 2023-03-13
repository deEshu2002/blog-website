import { createNextApiHandler} from "@trpc/server/adapters/next";
import { env } from "process";
import { appRouter } from "@/server/api/root";


export default createNextApiHandler({
    router: appRouter,
    onError: 
        env.NODE_ENV === "development"? ({path, error}) => {
            console.error(`trpc failed on ${path ?? "<no-path>"}: ${error.message}`,
            )
        }
        : undefined,
})