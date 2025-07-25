// عملکرد accordion - همه accordion ها می‌توانند همزمان باز باشند
function initAccordion() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');
            
            // تغییر وضعیت active
            header.classList.toggle('active');
            content.classList.toggle('active');
            
            // انیمیشن آیکون
            if (header.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        }
    });
}

// اجرای تابع پس از لود شدن DOM
document.addEventListener('DOMContentLoaded', initAccordion);