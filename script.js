const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(30px)";
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "all 0.8s ease-out";
        
        observer.observe(item);
    });
});


window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "10px 0";
        nav.style.boxShadow = "0 2px 10px rgba(244, 194, 201, 0.2)";
    } else {
        nav.style.padding = "15px 0";
        nav.style.boxShadow = "none";
    }
});