if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/pages/_middleware.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/366-bd4a3164751161c9.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/922-d5e87ee3f5a27dd3.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/main-5d47c2df2f4a6d3f.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/404-cbd7ea3bb347f29c.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/_app-21d76c64d728abbf.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/_error-8d1a9f444fa5e39f.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/bai-hoc/%5B%5B...slug%5D%5D-ac615ce4584f5b63.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/bai-viet/%5B%5B...slug%5D%5D-b592a6bcfe2ac81f.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/chinh-sach-bao-mat-87d734b88712930e.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/gioi-thieu-6e010c969d9497ee.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/hoi-dap-9b6266807c79d0f6.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/index-baeceb5aa705c537.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/pages/lien-he-26c03762fb6cb3f1.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/webpack-bad78d8784d7438a.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/chunks/webpack-middleware-bad78d8784d7438a.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/css/923e537896142dcf.css",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/css/aa027cca2fde51fd.css",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/css/e80e60e313451a32.css",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/wKYMa3MK3yRYZOs6Yt59c/_buildManifest.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/wKYMa3MK3yRYZOs6Yt59c/_middlewareManifest.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/_next/static/wKYMa3MK3yRYZOs6Yt59c/_ssgManifest.js",revision:"wKYMa3MK3yRYZOs6Yt59c"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/icons/maskable_icon_x192.png",revision:"2b0d333f36d69f022568c11863bcf652"},{url:"/manifest.json",revision:"72ea17bd6636e8ae42ed2b66cf6161bc"},{url:"/robots.txt",revision:"ce0f95703a83a8f9d81fc7e94a0c6bf3"},{url:"/sitemap.xml",revision:"054b48d851dd1220eae841f64e28e82b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));