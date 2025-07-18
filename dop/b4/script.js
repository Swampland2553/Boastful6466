document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.toggle-icon');
            const isActive = content.classList.contains('active');

            // Toggle the clicked section
            content.classList.toggle('active');
            if (!isActive) {
                icon.textContent = '−'; // Minus sign for open state
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.textContent = '+';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
});
