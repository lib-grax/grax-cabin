document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggle = document.querySelector('.nav-toggle');
  const sidebar = document.querySelector('.site-sidebar');
  const overlay = document.querySelector('.nav-overlay');
  const closeButton = document.querySelector('.site-sidebar__close');
  const sidebarLinks = document.querySelectorAll('.site-sidebar a');

  if (!toggle || !sidebar || !overlay || !closeButton) {
    return;
  }

  const openSidebar = () => {
    body.classList.add('sidebar-open');
    toggle.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    closeButton.focus();
  };

  const closeSidebar = () => {
    body.classList.remove('sidebar-open');
    toggle.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.focus();
  };

  toggle.addEventListener('click', () => {
    if (body.classList.contains('sidebar-open')) {
      closeSidebar();
      return;
    }

    openSidebar();
  });

  closeButton.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('sidebar-open');
      toggle.setAttribute('aria-expanded', 'false');
      sidebar.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('sidebar-open')) {
      closeSidebar();
    }
  });
});
