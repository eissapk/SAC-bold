// OLD CONFIGS:

import acceptLanguage from "accept-language";
// import { NextResponse } from "next/server";

// Register available locales
acceptLanguage.languages(["ar", "en"]);

// Middleware to redirect to the correct locale if none is given
// export let middleware = (request) => {
//   if (
//     // Not a file in /public
//     !/\.(.*)$/.test(request.nextUrl.pathname) &&
//     // Not an api route
//     !request.nextUrl.pathname.includes("/api/") &&
//     // Uses the default locale
//     request.nextUrl.locale === "default"
//   ) {
//     // Clone the entire current url object
//     const newUrl = request.nextUrl.clone();
//     // Set the locale to the first available locale or 'en'
//     newUrl.locale = "en";
//     // Redirect to the new url
//     return NextResponse.redirect(newUrl);
//   }
//   // Continue to the next middleware
//   return undefined;
// };

// Current working config
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["en", "ar"],

	// Used when no locale matches
	defaultLocale: "en",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(ar|en)/:path*"],
};
