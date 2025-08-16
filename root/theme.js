document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  toggle.textContent = savedTheme === 'dark' ? 'Toggle Light' : 'Toggle Dark';

  // Toggle theme on click
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? 'Toggle Light' : 'Toggle Dark';
  });
});