/** @type {import('next').NextConfig} */
export const reactStrictMode = true;
export const swcMinify = true;
export const i18n = {
  locales: ["en"],
  defaultLocale: "en",
};
export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    issuer: /\.(js|ts)x?$/,
    use: ["@svgr/webpack"],
  });

  return config;
}
