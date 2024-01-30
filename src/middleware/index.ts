import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(
  ({ cookies, request, redirect }, next) => {
    const token = cookies.get("sb-access-token")?.value;
    const cocktail = cookies.get("cocktail")?.value;

    if (
      (request.url.includes("/story") || request.url.includes("/cocktail")) &&
      !token
    ) {
      return redirect("/");
    }

    if (request.url.includes("/story") && cocktail) {
      return redirect("/cocktail/" + cocktail);
    }
    return next();
  }
);
