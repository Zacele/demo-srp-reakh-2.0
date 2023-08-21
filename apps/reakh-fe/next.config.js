module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['images.realestate.com.kh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com'
      },
      {
        protocol: 'https',
        hostname: 'uat.realestate.com.kh'
      },
      {
        protocol: 'https',
        hostname: 'realestate.com.kh'
      }
    ]
  }
}
