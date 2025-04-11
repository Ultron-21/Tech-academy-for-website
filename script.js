function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile.classList.add('open');
    }
  }

  const menu = document.querySelector('.menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      menu.classList.add('scrolled'); // rolar = transparente
    } else {
      menu.classList.remove('scrolled'); // topo = branco
    }
  });