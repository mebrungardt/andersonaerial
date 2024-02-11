/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "docs",
  //   assetPrefix: isProd ? "https://cdn.mydomain.com" : undefined,
  assetPrefix: isProd ? "." : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
