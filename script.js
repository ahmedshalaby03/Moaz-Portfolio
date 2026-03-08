const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.animation = "scan-flash 0.5s ease-out forwards";
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const roleElement = document.querySelector('.hero-text h2');
const originalText = "Full Stack Engineer";
roleElement.textContent = ""; 
roleElement.style.borderRight = "2px solid var(--neon-green)"; 
roleElement.style.paddingRight = "5px";

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        roleElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); 
    } else {
        setInterval(() => {
            roleElement.style.borderRightColor = 
                roleElement.style.borderRightColor === 'transparent' ? 'var(--neon-green)' : 'transparent';
        }, 500);
    }
}
setTimeout(typeWriter, 1000);


const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach((li) => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});