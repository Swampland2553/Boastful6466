document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.toggle-icon');

            // Close all other sections
            toggleButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.remove('active');
                    otherButton.querySelector('.toggle-icon').textContent = '+';
                }
            });

            // Toggle the clicked section
            content.classList.toggle('active');
            if (content.classList.contains('active')) {
                icon.textContent = '−'; // Use a minus sign for open state
            } else {
                icon.textContent = '+';
            }
        });
    });
});
