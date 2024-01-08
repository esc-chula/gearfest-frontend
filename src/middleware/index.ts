import { defineMiddleware } from "astro:middleware";
import { sequence } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // TODO: Implement auth routes logic
  console.log("Middleware works!");
  auth(??);

  return next();
});

async function auth(_, next) {
  console.log("auth request");
  const response = await next();
  console.log("auth response");
  return response;
}
