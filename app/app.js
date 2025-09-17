if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/app/sw.js') // no scope argument
    .then(reg => console.log('registered ✅', reg))
    .catch(err => console.error('registration failed 💀', err));
}

