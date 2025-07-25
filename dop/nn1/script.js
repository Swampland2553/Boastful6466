document.addEventListener("DOMContentLoaded", () => {
    const accordionContainer = document.getElementById("accordion-container");

    for (let i = 1; i <= 10; i++) {
        fetch(`partials/question_${i}.html`)
            .then(response => response.text())
            .then(html => {
                accordionContainer.innerHTML += html;
            });
    }

    accordionContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("accordion-button")) {
            event.target.classList.toggle("active");
        }
    });
});