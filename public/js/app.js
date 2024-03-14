window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      header.classList.add('dropfilter');
  } else {
      header.classList.remove('dropfilter');
  }
});