document.addEventListener('DOMContentLoaded', () => {
    // 1. Efek Mengetik Bergantian (Typewriter)
    const textElement = document.getElementById('typing-text');
    const phrases = [
        "SMP Graha Ilmu Bangsa",
        "Membentuk Lulusan Berkualitas",
        "Membangun Karakter Unggul",
        "Eksplorasi Potensi Tanpa Batas"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        if (!textElement) return;
        
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Jeda saat kalimat lengkap
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Jeda sebelum mulai kalimat baru
        }
        setTimeout(typeWriter, typeSpeed);
    }
    typeWriter();

    // 2. Scroll Effect untuk Navbar
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (nav) {
            window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
        }
    });

    // 3. Observer untuk Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .card, .registration-card, .reveal').forEach(el => {
        observer.observe(el);
    });

    // 4. Marquee Effect (Duplikasi Konten)
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        marqueeContent.innerHTML += marqueeContent.innerHTML;
    }

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});