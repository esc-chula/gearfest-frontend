import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	// TODO: Implement auth routes logic
	console.log('Middleware works!')

	return next();
});
