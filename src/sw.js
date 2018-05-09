const VERSION = 'v2';

function log(messages) {
  console.log(VERSION, messages);
}

log('Installing Service Worker.');

self.addEventListener('install', () => {
  log('version installed.');
});

self.addEventListener('activate', () => {
  log('version activated.');
});
