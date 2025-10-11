/**
 * 241 Solutions - Scroll Suave para Links de Navegação
 * Otimiza a navegação do usuário tornando os saltos entre seções suaves.
 */

// 1. Seleciona todos os links na página que começam com '#' (links de navegação interna)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
    // 2. Adiciona um 'listener' de evento de clique a cada um desses links
    anchor.addEventListener('click', function (e) {
        
        // 3. Previne o comportamento padrão do clique (o salto abrupto)
        e.preventDefault();
        
        // 4. Obtém o destino do link (o ID da seção, ex: #equipe)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // 5. Se o elemento de destino for encontrado, realiza a animação de scroll
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Esta é a propriedade que define o scroll suave
            });
        }
    });
});
// =================================================
// 241 Solutions - FUNCIONALIDADE DO CARROSSEL HERO
// =================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos do DOM
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const container = document.querySelector('.slides-container');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slideDuration = 7000; // 7 segundos

    // Função para atualizar a exibição do slide
    function updateSlider() {
        // Calcula a posição do slide para a transição CSS
        const offset = -currentSlide * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    // Função para mostrar o próximo slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Função para mostrar o slide anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Event Listeners para os botões manuais
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            // Reseta o temporizador ao interagir manualmente
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            // Reseta o temporizador ao interagir manualmente
            resetAutoPlay();
        });
    }

    // Autoplay: Troca de slide automática
    let slideInterval = setInterval(nextSlide, slideDuration);

    // Função para resetar o temporizador de autoplay
    function resetAutoPlay() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Inicia o carrossel (mostra o primeiro slide)
    updateSlider();
});
