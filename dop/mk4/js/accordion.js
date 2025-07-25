// عملکرد accordion - همه accordion ها می‌توانند همزمان باز باشند
function initializeAccordion() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('accordion-header')) {
            const content = e.target.nextElementSibling;
            const icon = e.target.querySelector('.accordion-icon');
            
            // تغییر وضعیت active
            e.target.classList.toggle('active');
            content.classList.toggle('active');
            
            // چرخش آیکون
            if (content.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });
}