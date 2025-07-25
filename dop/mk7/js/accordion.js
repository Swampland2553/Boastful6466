// عملکرد accordion برای سوالات
function initializeAccordion() {
    // انتخاب تمام هدرهای سوالات
    const questionHeaders = document.querySelectorAll('.question-header');
    
    questionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const questionCard = this.parentElement;
            const content = questionCard.querySelector('.question-content');
            const icon = this.querySelector('.toggle-icon');
            
            // تغییر وضعیت active
            content.classList.toggle('active');
            this.classList.toggle('active');
            
            // تغییر آیکون
            if (content.classList.contains('active')) {
                icon.textContent = '−';
                content.style.display = 'block';
            } else {
                icon.textContent = '+';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    });
}

// عملکرد accordion برای بخش‌های داخل هر سوال
function initializeSectionAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // تغییر وضعیت active
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            // تغییر آیکون
            if (content.classList.contains('active')) {
                icon.textContent = '▲';
            } else {
                icon.textContent = '▼';
            }
        });
    });
}

// اجرای توابع پس از بارگذاری DOM
document.addEventListener('DOMContentLoaded', function() {
    // تاخیر کوتاه برای اطمینان از رندر شدن محتوا
    setTimeout(() => {
        initializeAccordion();
        initializeSectionAccordion();
    }, 100);
});