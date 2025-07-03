export default defineAppConfig({
  title: 'Sink',
  email: 'jp@8void.com',
  github: 'https://github.com/Jv0id/sink',
  twitter: 'https://404.8void.sbs/x',
  telegram: 'https://404.8void.sbs/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://404.8void.sbs/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://404.8void.sbs/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
