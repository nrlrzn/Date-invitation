const loader = document.getElementById('loader');
const pages = document.querySelectorAll('.page');
const noBtn = document.getElementById('noBtn');

function goToPage(pageNumber) {
  loader.style.display = 'flex';

  setTimeout(() => {
    pages.forEach((page) => page.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
    loader.style.display = 'none';
  }, 800);
}

document.querySelector('#page1 img').addEventListener('click', () => {
  goToPage(2);
});

document.querySelectorAll('[data-next]').forEach((btn) => {
  btn.addEventListener('click', () => {
    goToPage(btn.dataset.next);
  });
});

function moveNoButton() {
  const parent = noBtn.parentElement;
  const maxX = parent.clientWidth - noBtn.clientWidth;
  const maxY = parent.clientHeight - noBtn.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}
noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});
