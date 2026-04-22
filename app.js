document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.demo-section');
  const menuButtons = document.querySelectorAll('.menu button[data-target]');

  function showSection(targetId) {
    sections.forEach((section) => {
      section.classList.toggle('active', section.id === targetId);
    });

    menuButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.target === targetId);
    });
  }

  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showSection(button.dataset.target);
    });
  });

  showSection('vanilla');
});
