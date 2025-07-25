// عملکرد accordion
function initializeAccordion() {
    const questionHeaders = document.querySelectorAll('.question-header');
    
    questionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const questionCard = this.parentElement;
            const content = questionCard.querySelector('.question-content');
            const icon = this.querySelector('.accordion-icon');
            
            // تغییر وضعیت active
            content.classList.toggle('active');
            icon.classList.toggle('active');
            
            // انیمیشن باز و بسته شدن
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
}

// تنظیم مجدد ارتفاع accordion ها در صورت تغییر اندازه صفحه
function adjustAccordionHeights() {
    const activeContents = document.querySelectorAll('.question-content.active');
    
    activeContents.forEach(content => {
        content.style.maxHeight = content.scrollHeight + 'px';
    });
}

// رویداد تغییر اندازه صفحه
window.addEventListener('resize', adjustAccordionHeights);