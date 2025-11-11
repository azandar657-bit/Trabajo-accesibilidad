// Funcionalidad de Tabs
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remover activos
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Activar seleccionado
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        document.getElementById(tabName).classList.add('active');
    });
});

// Navegación con teclado en tabs
document.addEventListener('keydown', function(event) {
    const activeButton = document.querySelector('.tab-button.active');
    const allButtons = Array.from(document.querySelectorAll('.tab-button'));
    const currentIndex = allButtons.indexOf(activeButton);
    
    let nextIndex;
    
    if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextIndex = (currentIndex + 1) % allButtons.length;
        allButtons[nextIndex].click();
        allButtons[nextIndex].focus();
    } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        nextIndex = (currentIndex - 1 + allButtons.length) % allButtons.length;
        allButtons[nextIndex].click();
        allButtons[nextIndex].focus();
    }
});

// Smoothscroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Script loaded - Accessibility features activated');