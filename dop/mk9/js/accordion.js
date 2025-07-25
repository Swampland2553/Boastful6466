// عملکرد accordion
function initializeAccordion() {
    // رویداد کلیک برای هدر سوالات
    document.addEventListener('click', function(e) {
        if (e.target.closest('.question-header')) {
            const header = e.target.closest('.question-header');
            const content = header.nextElementSibling;
            
            // تغییر وضعیت active
            header.classList.toggle('active');
            content.classList.toggle('active');
        }
        
        // رویداد کلیک برای accordion های داخلی
        if (e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const content = header.nextElementSibling;
            
            // تغییر وضعیت active
            header.classList.toggle('active');
            content.classList.toggle('active');
        }
    });
}

// اجرای تابع پس از بارگذاری DOM
document.addEventListener('DOMContentLoaded', initializeAccordion);