const navbar = document.querySelector('.navbar');

let animationDuration = '100s';
let scrollTimeoutId = null;

window.addEventListener('scroll', () => {
  // if there's a timeoutId, the user is still scrolling
  if (scrollTimeoutId) {
    clearTimeout(scrollTimeoutId);
    animationDuration = '5s';
  } else {
    animationDuration = '100s';
  }
  navbar.style.animationPlayState = 'running';
  navbar.style.animationDuration = animationDuration;
  // setTimeout to set animation to paused after 5 sec
  scrollTimeoutId = setTimeout(() => {
    navbar.style.animationPlayState = 'paused';
    scrollTimeoutId = null;
  }, 5000);
});
