/** @type {import('next/dist/server/')} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["placeimg.com"],
    loader: "imgix",
    path: "",
  },
};
