// Inicializar AOS
AOS.init();

// Smooth scrolling para enlaces del sidebar
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const offset = 80;
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Toggles de la sección Career
document.querySelectorAll('.career-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Configuración del efecto de inclinación
const maxTilt = 15; // Máximo ángulo de inclinación
const perspective = 1000; // Perspectiva para el efecto 3D

// Función para aplicar el efecto de inclinación
function applyTiltEffect(event, card) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = -((y - centerY) / centerY);

    const tiltX = percentY * maxTilt;
    const tiltY = percentX * maxTilt;

    card.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    card.style.transition = 'transform 0.1s ease-out';
}

// Función para resetear la inclinación
function resetTilt(card) {
    card.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`;
    card.style.transition = 'transform 0.5s ease-out';
}

// Aplicar efecto de inclinación a todas las cartas con la clase 'glass-card'
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (event) => applyTiltEffect(event, card));
    card.addEventListener('mouseleave', () => resetTilt(card));
});
