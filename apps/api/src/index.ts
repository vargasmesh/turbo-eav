import "dotenv/config";
import { appRouter } from "./trpc";

import { createHTTPServer } from "@trpc/server/adapters/standalone";
import * as cors from "cors";

createHTTPServer({
  middleware: cors(),
  router: appRouter,
}).listen(3000);
