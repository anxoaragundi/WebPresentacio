// Obtener la referencia de la carta
const glassCard = document.getElementById('glassCard');

// Evento para detectar movimiento del puntero sobre la carta
glassCard.addEventListener('mousemove', (event) => {
    const rect = glassCard.getBoundingClientRect(); // Obtener posición y tamaño de la carta
    const x = event.clientX - rect.left; // Posición del puntero relativa a la carta
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2; // Centro horizontal de la carta
    const centerY = rect.height / 2; // Centro vertical de la carta

    // Incrementamos la intensidad del efecto multiplicando los valores por 1.5
    const rotateX = ((y - centerY) / centerY) * -15; // Rotación en el eje X (más inclinación)
    const rotateY = ((x - centerX) / centerX) * 15;  // Rotación en el eje Y (más inclinación)

    glassCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    glassCard.classList.add('pointer-transform');
});

// Evento para resetear la posición cuando el puntero salga de la carta
glassCard.addEventListener('mouseleave', () => {
    glassCard.style.transform = 'rotateX(0) rotateY(0)';
    glassCard.classList.remove('pointer-transform');
});


document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto
        const targetId = link.getAttribute('href').slice(1); // Obtiene el ID de la sección
        const targetElement = document.getElementById(targetId);

        // Calcula la posición de la sección y aplica un desplazamiento adicional
        const offset = 80; // Ajusta según el tamaño del margen superior deseado
        const targetPosition = targetElement.offsetTop - offset;

        // Desplazamiento suave al objetivo
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
