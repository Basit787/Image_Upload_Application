import { serve } from "@hono/node-server";
import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { connectDatabase } from "./db/index.js";
import { routes } from "./routes/index.routes.js";

const app = new Hono();

app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "DELETE", "PUT"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 3600,
    credentials: true,
  })
);

await connectDatabase();

app.route("/api", routes);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT),
});
