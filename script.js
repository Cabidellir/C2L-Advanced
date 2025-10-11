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
