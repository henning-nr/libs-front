document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('vanilla-text');
  const button = document.getElementById('vanilla-btn');

  button.addEventListener('click', () => {
    text.style.color = 'red';
  });
});
