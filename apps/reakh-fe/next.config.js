module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['images.realestate.com.kh'],
  },
}
