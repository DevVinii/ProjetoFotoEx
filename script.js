// arquivo: script.js

document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.animate-on-scroll');

  // Configura o IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // adiciona a classe active quando o elemento entra na viewport
        entry.target.classList.add('active');
        // se não quiser mais observar depois de ativar uma vez, descomente:
        // observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,           // observa a viewport do browser
    rootMargin: '0px',
    threshold: 0.2        // considera “visível” quando 20% do elemento estiver na viewport
  });

  // Passa cada elemento para o observer “vigiar”
  elementos.forEach(el => observer.observe(el));
});
