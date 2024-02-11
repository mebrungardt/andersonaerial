/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === "production";

// const isGithubActions = process.env.GITHUB_ACTIONS || false;

// let assetPrefix = "";
// let basePath = "";

// const pathPrefix =
//   process.env.NODE_ENV === "production" ? "/andersonaerial" : "";
const pathPrefix = "";

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// }

const nextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "docs",
  //   assetPrefix: isProd ? "https://cdn.mydomain.com" : undefined,
  //   assetPrefix: isProd ? "." : undefined,
  images: {
    unoptimized: true,
  },
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
  //   basePath: pathPrefix,
};

export default nextConfig;

// next.config.js

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   images: {
//     loader: 'imgix',
//     path: 'the "domain" of your Imigix source',
//   },
// }
