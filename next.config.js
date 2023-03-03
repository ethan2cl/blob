const WithAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = WithAntdLess({
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
