function createHearts() {
    const numHearts = window.innerWidth > 600 ? 10 : 5; // Fewer hearts on mobile
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 2 + 's'; // Random start times
        document.body.appendChild(heart);
    }
}

createHearts();