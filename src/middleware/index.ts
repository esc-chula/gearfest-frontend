import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(
  ({ cookies, request, redirect }, next) => {
    const cookie = cookies.get("sb-access-token")?.value;

    if (
      (request.url.includes("/story") || request.url.includes("/cocktail")) &&
      !cookie
    ) {
      return redirect("/");
    }
    return next();
  }
);
