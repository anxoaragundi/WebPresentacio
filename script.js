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

// Obtener la referencia de la carta de About Me
const glassCard = document.getElementById('glassCard');

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

// Aplicar efecto a la carta de About Me
glassCard.addEventListener('mousemove', (event) => applyTiltEffect(event, glassCard));
glassCard.addEventListener('mouseleave', () => resetTilt(glassCard));

// Obtener la referencia de la carta del proyecto en Projects
const projectCard = document.getElementById('projectCard');

// Aplicar efecto a la carta del proyecto
projectCard.addEventListener('mousemove', (event) => applyTiltEffect(event, projectCard));
projectCard.addEventListener('mouseleave', () => resetTilt(projectCard));

// Ajuste de estilo para el botón del proyecto
const projectButton = document.querySelector('#projectCard .btn-project');

// Aplicar efecto al botón
projectButton.addEventListener('mouseenter', () => {
    projectButton.style.transform = 'scale(1.1)';
    projectButton.style.boxShadow = '0 4px 20px rgba(255, 255, 255, 0.3)';
    projectButton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

projectButton.addEventListener('mouseleave', () => {
    projectButton.style.transform = 'scale(1)';
    projectButton.style.boxShadow = 'none';
    projectButton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});
