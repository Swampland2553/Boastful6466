document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.toggle-icon');
            const isActive = content.classList.contains('active');

            // Close all other open sections to act like an accordion
            document.querySelectorAll('.collapsible-content.active').forEach(openContent => {
                if (openContent !== content) {
                    openContent.classList.remove('active');
                    const otherButton = openContent.previousElementSibling;
                    otherButton.querySelector('.toggle-icon').textContent = '+';
                    otherButton.querySelector('.toggle-icon').style.transform = 'rotate(0deg)';
                }
            });

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
