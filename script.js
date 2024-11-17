document.querySelectorAll('.viewer-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0px 0px 20px rgba(229, 9, 20, 0.8)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});