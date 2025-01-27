import { Hono } from "hono";
import { imageRoute } from "./imageupload.routes.js";

export const routes = new Hono();

routes.route("/image", imageRoute);
