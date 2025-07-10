document.addEventListener('DOMContentLoaded', () => {
    const phaseHeaders = document.querySelectorAll('.phase-header');

    phaseHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Find the parent .phase element
            const currentPhase = header.parentElement;

            // Check if the clicked phase is already active
            const isAlreadyActive = currentPhase.classList.contains('active');

            // First, close all other active phases
            document.querySelectorAll('.phase.active').forEach(activePhase => {
                // We only close it if it's not the one we just clicked
                if (activePhase !== currentPhase) {
                    activePhase.classList.remove('active');
                }
            });

            // Now, toggle the active class on the clicked phase
            // This will open it if it was closed, and close it if it was already open.
            currentPhase.classList.toggle('active');
        });
    });
});