module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ['ui'],
  async rewrites() {
    return [
      {
        source: '/buy/:slug*', // Matched parameters can be used in the destination
        destination: '/results/buy/:slug*'
      },
      {
        source: '/rent/:slug*', // Matched parameters can be used in the destination
        destination: '/results/rent/:slug*'
      },
      {
        source: '/buy', // Matched parameters can be used in the destination
        destination: '/results/buy'
      },
      {
        source: '/rent', // Matched parameters can be used in the destination
        destination: '/results/rent'
      }
    ]
  },

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
