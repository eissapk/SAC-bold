/** @type {import('next').NextConfig} */

module.exports = {
  output: "standalone",
  i18n: {
    locales: ["default", "en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
  },
};
