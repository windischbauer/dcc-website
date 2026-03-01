const logo = document.querySelector('.logo');
const initialTop = 0;
const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const minTop = -7 * rem;

function updateLogoPosition() {
  const top = Math.max(minTop, initialTop - window.scrollY);
  logo.style.top = top + 'px';
}

window.addEventListener('scroll', updateLogoPosition, { passive: true });
updateLogoPosition();
