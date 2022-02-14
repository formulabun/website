module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://api.formulabun.club/servers/main/:path*",
      },
    ]
  },
}
