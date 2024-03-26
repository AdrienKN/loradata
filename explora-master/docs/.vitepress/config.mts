import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/explora/',
  title: 'expLoRa',
  description: 'Collaborative IoT platform',
  ignoreDeadLinks: true,
  head: [
    ['link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css', rel: 'stylesheet' }],
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kano/kano-icon-64x64.png` }]
  ],
  themeConfig: {
    logo: '/public/logo_explora_cropped.png',
    domain: 'dev.kalisio.xyz',
    socialLinks: [{ icon: 'github', link: 'https://github.com/kalisio' }],
    nav: [
      { text: 'About', link: '/about/introduction' },
      { text: 'Understand', link: '/understand/lorawan' },
      { text: 'Contribute', link: '/contribute/gateways' },
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/understand/': getUnderstandSidebar(),
      '/contribute/': getContributeSidebar()
    },
    footer: {
      copyright: 'MIT Licensed | Copyright © 2017-20xx Kalisio'
    },
    trustLogos: [
      { imageLink: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/logos/airbus.png', link: 'https://www.airbus.com/' },
      { imageLink: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/logos/irsn.png', link: 'https://www.irsn.fr/' }
    ],
    maps: {
      jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJkZXYua2FsaXNpby54eXoiLCJpc3MiOiJrYWxpc2lvIn0.CGvJwPPkuiFvNzo3zUBb-_vwD0CKbUfm7w7TkCY-Ts4'
    }
  },
  vite: {
    optimizeDeps: {
			include: ['keycloak-js', 'lodash'],
		},
		ssr: {
			noExternal: ['vitepress-theme-kalisio']
		}
  }
})

function getAboutSidebar () {
  return [
    { text: 'Introduction', link: '/about/introduction' },
    { text: 'License', link: '/about/license' },
    { text: 'Contact', link: '/about/contact' }
  ]
}

function getUnderstandSidebar () {
  return [
    { text: 'LoRaWAN', link: '/understand/lorawan' },
    { text: 'Chirpstack', link: '/understand/chirpstack' },
    { text: 'Tetaneutral', link: '/understand/tetaneutral' }
  ]
}

function getContributeSidebar () {
  return [
    { text: 'Gateways', link: '/contribute/gateways' },
    { text: 'Sensors', link: '/contribute/sensors' }
  ]
}
