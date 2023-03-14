import { httpBatchLink } from "@trpc/client";
import { createTRPCNext, CreateTRPCNext } from "@trpc/next";
import type { appRouter} from "@/server/routers/_app";

function getBaseUrl() {
    return `http://localhost:3000`;
}

export const trpc = createTRPCNext<typeof appRouter>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});