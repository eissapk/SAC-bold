/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
module.exports = withNextIntl({
  // output: "standalone",
  reactStrictMode: false,
  // i18n: {
  //   locales: ["default", "en", "ar"],
  //   defaultLocale: "default",
  //   localeDetection: false,
  // },
});