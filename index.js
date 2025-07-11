function animationMain() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.remove('main-load');
        void mainContent.offsetWidth;
        mainContent.classList.add('main-load');
    }
}

document.addEventListener('DOMContentLoaded', animationMain);

window.addEventListener('pageshow', function(event) {
    if(event.persisted) {
        animationMain();
    }
});

const body = document.body;

const cards = [
  { element: document.getElementById('skillsCard1'), theme: 'theme1' },
  { element: document.getElementById('skillsCard2'), theme: 'theme2' },
  { element: document.getElementById('skillsCard3'), theme: 'theme3' },
  { element: document.getElementById('skillsCard4'), theme: 'theme4' },
  { element: document.getElementById('skillsCard5'), theme: 'theme5' },
];

cards.forEach(card => {
  if (card.element) {
    card.element.addEventListener('mouseenter', () => {
      body.setAttribute('data-theme', card.theme);
    });
    card.element.addEventListener('mouseleave', () => {
      body.setAttribute('data-theme', 'theme');
    });
  }
});

