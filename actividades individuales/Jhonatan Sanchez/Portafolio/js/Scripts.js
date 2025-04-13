document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para toda la página
    document.body.style.opacity = '1';
    
    // Configuración de los círculos de progreso con animación
    const progressCircles = document.querySelectorAll('.circle-progress');
    
    progressCircles.forEach(circle => {
        const percent = parseInt(circle.getAttribute('data-percent'));
        const circumference = 2 * Math.PI * 50; // Radio del círculo
        
        // Crear elemento SVG para el círculo de progreso
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('width', '120');
        svg.setAttribute('height', '120');
        svg.setAttribute('viewBox', '0 0 120 120');
        svg.classList.add('progress-svg');
        
        // Crear círculo de fondo
        const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bgCircle.setAttribute('cx', '60');
        bgCircle.setAttribute('cy', '60');
        bgCircle.setAttribute('r', '50');
        bgCircle.setAttribute('fill', 'none');
        bgCircle.setAttribute('stroke', '#e0e0e0');
        bgCircle.setAttribute('stroke-width', '8');
        
        // Crear círculo de progreso
        const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        progressCircle.setAttribute('cx', '60');
        progressCircle.setAttribute('cy', '60');
        progressCircle.setAttribute('r', '50');
        progressCircle.setAttribute('fill', 'none');
        progressCircle.setAttribute('stroke', '#3498db');
        progressCircle.setAttribute('stroke-width', '8');
        progressCircle.setAttribute('stroke-dasharray', circumference);
        progressCircle.setAttribute('stroke-dashoffset', circumference);
        progressCircle.setAttribute('stroke-linecap', 'round');
        progressCircle.style.transform = 'rotate(-90deg)';
        progressCircle.style.transformOrigin = 'center';
        progressCircle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        
        // Agregar elementos al SVG
        svg.appendChild(bgCircle);
        svg.appendChild(progressCircle);
        
        // Reemplazar el div por el SVG
        circle.replaceWith(svg);
        
        // Agregar texto de porcentaje
        const percentText = document.createElement('div');
        percentText.classList.add('percent-text');
        percentText.textContent = '0%';
        percentText.style.position = 'absolute';
        percentText.style.top = '50%';
        percentText.style.left = '50%';
        percentText.style.transform = 'translate(-50%, -50%)';
        percentText.style.color = '#3498db';
        percentText.style.fontWeight = 'bold';
        
        svg.parentNode.appendChild(percentText);
        
        // Animación del porcentaje
        setTimeout(() => {
            progressCircle.setAttribute('stroke-dashoffset', circumference - (percent / 100) * circumference);
            
            // Animación del contador numérico
            let currentPercent = 0;
            const interval = setInterval(() => {
                currentPercent++;
                percentText.textContent = `${currentPercent}%`;
                if (currentPercent >= percent) {
                    clearInterval(interval);
                }
            }, 1500 / percent);
        }, 300);
    });
    
    // Efecto hover para los items de habilidades
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            this.querySelector('.skill-image').style.transform = 'translate(-50%, -50%) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.querySelector('.skill-image').style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Animación para la imagen principal
    const mainImage = document.querySelector('.item-1 .image-container img');
    if (mainImage.complete) {
        mainImage.classList.add('loaded');
    } else {
        mainImage.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    }
    
    // Animación de entrada para el grid
    const grid = document.querySelector('.portfolio-grid');
    setTimeout(() => {
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
    }, 300);
});