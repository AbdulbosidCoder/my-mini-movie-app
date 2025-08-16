document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const mainContent = document.querySelector('main');
  const navLinks = document.querySelectorAll('.nav-link:not(#themeToggle):not(.always-active)');

  if (!isLoggedIn && mainContent) {
    // Hide main content and show restricted message
    mainContent.innerHTML = `
      <div class="restricted-message" role="alert">
        <p>Please <a href="login.html">log in</a> to access this page.</p>
      </div>
    `;
    // Disable navigation links to protected pages
    navLinks.forEach(link => {
      if (link.getAttribute('href') !== 'login.html') {
        link.classList.add('disabled');
      }
    });
  }
});