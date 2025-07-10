document.addEventListener('DOMContentLoaded', function () {
    const stages = document.querySelectorAll('.stage');
    const progressBar = document.getElementById('progress-bar');
    const totalStages = stages.length;

    stages.forEach(stage => {
        const header = stage.querySelector('.stage-header');
        
        header.addEventListener('click', () => {
            const isActive = stage.classList.contains('active');

            // Close all other stages for a cleaner accordion experience
            stages.forEach(s => {
                s.classList.remove('active');
            });

            // If the clicked stage was not already active, open it
            if (!isActive) {
                stage.classList.add('active');
            }
            
            updateProgressBar();
        });
    });

    function updateProgressBar() {
        // Find the highest active stage
        let highestActiveStage = 0;
        stages.forEach(stage => {
            if (stage.classList.contains('active')) {
                const stageNumber = parseInt(stage.getAttribute('data-stage'));
                if (stageNumber > highestActiveStage) {
                    highestActiveStage = stageNumber;
                }
            }
        });

        // Calculate progress
        // If a stage is open, progress is based on that stage.
        // If all are closed, progress is 0.
        const progressPercentage = (highestActiveStage / totalStages) * 100;

        // Update the progress bar width
        progressBar.style.width = `${progressPercentage}%`;
    }

    // Initialize progress bar at 0% on load
    updateProgressBar();
});