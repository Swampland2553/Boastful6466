document.addEventListener('DOMContentLoaded', function() {

    // --- Tab Functionality ---
    const tabContainer = document.querySelector('.tabs');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabContainer.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.tab-btn');
        if (!clickedButton) return;

        // Get the target panel's ID from data-target attribute
        const targetId = clickedButton.dataset.target;
        const targetPanel = document.getElementById(targetId);

        // Update active state for buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        clickedButton.classList.add('active');

        // Update active state for content panels
        contentPanels.forEach(panel => {
            panel.classList.remove('active');
        });
        targetPanel.classList.add('active');
    });

    // --- Accordion Functionality ---
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the 'active' class on the button
            button.classList.toggle('active');

            // Get the panel
            const panel = button.nextElementSibling;

            // Toggle the max-height for a smooth transition
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.style.padding = "0 15px";
            } else {
                panel.style.padding = "15px";
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- Checklist Functionality ---
    const checklists = document.querySelectorAll('.checklist');
    checklists.forEach(list => {
        list.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const label = e.target.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    // This is handled by CSS, but you could add more logic here if needed
                    // For example, saving the state to localStorage
                }
            }
        });
    });

});