// عملکرد accordion - همه accordion ها می‌توانند همزمان باز باشند
function initializeAccordion() {
    document.addEventListener('click', function(e) {
        // برای accordion های اصلی سوالات
        if (e.target.closest('.question-header')) {
            const header = e.target.closest('.question-header');
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            
            content.classList.toggle('active');
            icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        
        // برای accordion های فرعی (بخش‌های مختلف هر سوال)
        if (e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-toggle');
            
            header.classList.toggle('active');
            content.classList.toggle('active');
        }
    });
}