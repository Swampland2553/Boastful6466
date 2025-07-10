document.addEventListener('DOMContentLoaded', () => {

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // The currently active item, if any
            const activeItem = document.querySelector('.accordion-header.active');

            // If there is an active item and it's not the one we just clicked, close it
            if (activeItem && activeItem !== header) {
                activeItem.classList.remove('active');
                activeItem.nextElementSibling.style.display = 'none';
            }

            // Toggle the clicked item
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (header.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

});