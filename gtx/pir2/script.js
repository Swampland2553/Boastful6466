document.addEventListener("DOMContentLoaded", function() {
    // Select all accordion headers
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // Find the associated content panel
            const content = this.nextElementSibling;
            
            // Toggle the 'active' class on the clicked header
            this.classList.toggle("active");

            // Animate the opening/closing of the content panel
            if (content.style.maxHeight) {
                // If it's open, close it
                content.style.maxHeight = null;
                content.style.padding = "0 20px"; // Animate padding out
            } else {
                // If it's closed, open it
                // Set max-height to its scrollHeight to make it fully visible
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "20px"; // Animate padding in
            }
        });
    });
});