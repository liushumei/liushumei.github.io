/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ff4734b9fb8a69abab066901071eb65"
  },
  {
    "url": "about/index.html",
    "revision": "3b2be463fa756fc05123dfee1abcf54d"
  },
  {
    "url": "assets/css/7.styles.28de83e7.css",
    "revision": "0e5d7a5a0801a0b2375378ee5efcdc32"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.264af2fd.js",
    "revision": "d7371fa4aaa9117558fc32f3755a0692"
  },
  {
    "url": "assets/js/1.ffa68b3f.js",
    "revision": "94428a6385a414d733c1cbd78edc44ba"
  },
  {
    "url": "assets/js/2.c1fc659d.js",
    "revision": "83a546c728f79019f58528a6b6972526"
  },
  {
    "url": "assets/js/3.173d117f.js",
    "revision": "d9ff55218aca8d5d6ccfd059fe2ac2bb"
  },
  {
    "url": "assets/js/4.dc0390ad.js",
    "revision": "de4c9be1489707a08579d6550a6a39e2"
  },
  {
    "url": "assets/js/5.bb22efbf.js",
    "revision": "4be9e0b55dad6cd518f152815003eaf0"
  },
  {
    "url": "assets/js/6.0d8e74d2.js",
    "revision": "7b4b19941912868981abab604a839c24"
  },
  {
    "url": "assets/js/app.7e80766c.js",
    "revision": "1c8c9dc7088f2b3ad2e19abe1b98f544"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "fcac981be23d9d06faf6cde87c2eff43"
  },
  {
    "url": "logo.jpeg",
    "revision": "7a3857ede23810e6f34d1dc42f35ece4"
  },
  {
    "url": "methods/index.html",
    "revision": "88e71a2f73c419c1ccb78ec8e99d5852"
  },
  {
    "url": "methods/time.html",
    "revision": "2b1a567cf1c6d1d044a69f1d9de0694b"
  },
  {
    "url": "methods/xmind.html",
    "revision": "66e5cc6154783f47977aff2784abac2c"
  },
  {
    "url": "technology/blog.html",
    "revision": "53be021cd318e940a97f8a24aeec2b51"
  },
  {
    "url": "technology/index.html",
    "revision": "00a84d75ced01ce81df066230a1b4c37"
  },
  {
    "url": "vuepress.jpg",
    "revision": "61c6ec3eb8c246711b24b482f570fe27"
  },
  {
    "url": "wanzi.jpg",
    "revision": "4075413e09bda84c91e7a0e14623f63e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
