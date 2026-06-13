module.exports = {
  publicPath: '/sushiro-vue/',
  pwa: {
    name: 'Sushiro-vue',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      faviconSVG: 'public/assets/icon/sushi.svg',
      favicon32: null,
      favicon16: null,
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null,
    },
    manifestOptions: {
      icons: [
        {
          src: 'assets/icon/sushi.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'maskable any',
        },
      ]
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}