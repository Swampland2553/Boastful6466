document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultsContainer = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const feedbackDiv = document.getElementById('feedback');
    const timerSpan = document.querySelector('#timer span');

    const correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'd',
        q4: 'b',
        q5: 'c',
        q6: 'b',
        q7: 'b',
        q8: 'c',
        q9: 'b',
        q10: 'a'
    };

    let timeLeft = 15 * 60; // 15 minutes in seconds
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;
            timerSpan.textContent = `${minutes}:${seconds}`;

            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(timerInterval);
                timerSpan.textContent = "00:00";
                alert('زمان شما به پایان رسید!');
                submitQuiz();
            }
        }, 1000);
    }

    function submitQuiz(event) {
        if (event) event.preventDefault();
        clearInterval(timerInterval);

        let score = 0;
        feedbackDiv.innerHTML = '';

        const userAnswers = new FormData(quizForm);

        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = userAnswers.get(question);
            const questionBlock = document.querySelector(`input[name="${question}"]`).closest('.question-block');
            const labels = questionBlock.querySelectorAll('label');

            labels.forEach(label => {
                const input = label.querySelector('input');
                label.classList.remove('correct', 'incorrect'); // Reset classes

                if (input.checked) { // The user's selected answer
                    if (userAnswer === correctAnswer) {
                        label.classList.add('correct');
                        score++;
                    } else {
                        label.classList.add('incorrect');
                    }
                } 
                // Show the correct answer if the user was wrong or didn't answer
                if (input.value === correctAnswer) {
                    if (userAnswer !== correctAnswer) {
                         // Find the correct label and add a class to it, but don't override the user's incorrect choice styling
                        const correctLabel = document.querySelector(`input[name="${question}"][value="${correctAnswer}"]`).parentElement;
                        correctLabel.classList.add('correct');
                    }
                }
            });
        }

        scoreSpan.textContent = score;
        resultsContainer.classList.remove('hidden');
        submitBtn.disabled = true;
        window.scrollTo(0, document.body.scrollHeight); // Scroll to results
    }

    quizForm.addEventListener('submit', submitQuiz);
    startTimer();
});
