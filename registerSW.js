if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/edit-it/sw.js', { scope: '/edit-it/' })})}