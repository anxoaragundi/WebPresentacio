AOS.init();

// Smooth scrolling for sidebar links
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

// Career toggles
document.querySelectorAll('.career-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// Obtener la referencia de la carta
const glassCard = document.getElementById('glassCard');

// Configuración del efecto
const maxTilt = 15; // Máximo ángulo de inclinación
const perspective = 1000; // Perspectiva para el efecto 3D

// Función para aplicar el efecto de inclinación
function applyTiltEffect(event) {
    const rect = glassCard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = -((y - centerY) / centerY);

    const tiltX = percentY * maxTilt;
    const tiltY = percentX * maxTilt;

    glassCard.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    glassCard.style.transition = 'transform 0.1s ease-out';
}

// Función para resetear la inclinación
function resetTilt() {
    glassCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    glassCard.style.transition = 'transform 0.5s ease-out';
}

// Evento para detectar movimiento del puntero sobre la carta
glassCard.addEventListener('mousemove', applyTiltEffect);

// Evento para resetear la posición cuando el puntero salga de la carta
glassCard.addEventListener('mouseleave', resetTilt);
