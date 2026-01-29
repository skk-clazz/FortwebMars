// sk.js - redirect logic for sk.html
(function () {
  const REDIRECT_DELAY = 2000; // milliseconds
  let redirectTimer = null;

  function startRedirect() {
    cancelRedirect();
    redirectTimer = setTimeout(() => {
      window.location.href = 'index.html';
    }, REDIRECT_DELAY);
  }

  function cancelRedirect() {
    if (redirectTimer) {
      clearTimeout(redirectTimer);
      redirectTimer = null;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.redirect-container');
    const btn = container ? container.querySelector('.btn') : null;

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        cancelRedirect();
        const href = btn.getAttribute('href') || 'index.html';
        window.location.href = href;
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    }

    // Pause redirect when the page is hidden (user switched tabs)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelRedirect();
      else if (!redirectTimer) startRedirect();
    });

    startRedirect();
  });
})();
