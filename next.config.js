/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_MESSAGING_SENDER_ID: process.env.EACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID: process.env.REACT_APP_APP_ID,
  },
}

module.exports = nextConfig