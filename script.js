document.addEventListener("DOMContentLoaded", () => {
    // Animazioni scroll
    const animated = document.querySelectorAll('.fade-scroll, .fade-slide-left, .fade-slide-right, .zoom-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    animated.forEach(el => observer.observe(el));

    // Menu mobile toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    mobileMenu.addEventListener('click', () => navList.classList.toggle('active'));
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => navList.classList.remove('active'));
    });

    // Carosello 3D
    const carousel = document.querySelector('.carousel-3d');
    if(carousel) {
        const items = carousel.querySelectorAll('.lattina');
        const total = items.length;
        const angle = 360 / total;
        let current = 0;
        setInterval(() => {
            current++;
            carousel.style.transform = `translateZ(-450px) rotateY(${current*angle}deg)`;
        }, 1800);
    }
});
