document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const answers = {
        q1: 'c',
        q2: 'c',
        q3: 'b',
        q4: 'c',
        q5: 'c',
        q6: 'c',
        q7: 'c',
        q8: 'b',
        q9: 'b',
        q10: 'c'
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (const q in answers) {
        const selectedOption = document.querySelector(`input[name="${q}"]:checked`);
        const questionBlock = document.getElementById(q.replace('q', 'question'));
        const options = questionBlock.querySelectorAll('.options li label');

        // Reset previous styles
        options.forEach(label => {
            label.classList.remove('correct', 'incorrect');
        });

        if (selectedOption) {
            const parentLabel = selectedOption.parentElement;
            if (selectedOption.value === answers[q]) {
                score++;
                parentLabel.classList.add('correct');
            } else {
                parentLabel.classList.add('incorrect');
                // Also show the correct answer
                const correctOption = questionBlock.querySelector(`input[value="${answers[q]}"]`);
                if (correctOption) {
                    correctOption.parentElement.classList.add('correct');
                }
            }
        } else {
            // If no answer is selected, mark the correct one
            const correctOption = questionBlock.querySelector(`input[value="${answers[q]}"]`);
            if (correctOption) {
                correctOption.parentElement.classList.add('correct');
            }
        }
    }

    const resultsDiv = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const totalSpan = document.getElementById('total');
    const feedbackP = document.getElementById('feedback');

    scoreSpan.textContent = score;
    totalSpan.textContent = totalQuestions;

    let feedbackMessage = '';
    if (score <= 4) {
        feedbackMessage = 'نیاز به تلاش بیشتر داری! 💪 دوباره مرور کن.';
    } else if (score <= 7) {
        feedbackMessage = 'خوب بود! 👏 چندتا نکته رو دوباره بخون.';
    } else if (score <= 9) {
        feedbackMessage = 'عالی بود! 🎉 تقریبا همه‌چیز رو یاد گرفتی.';
    } else {
        feedbackMessage = 'فوق‌العاده! 🚀 تو یه قهرمان واقعی هستی!';
    }

    feedbackP.textContent = feedbackMessage;
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
});