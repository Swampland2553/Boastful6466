document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quizForm');
    const resultsContainer = document.getElementById('results');
    const scoreSpan = document.getElementById('score');
    const totalSpan = document.getElementById('total');
    const feedbackSpan = document.getElementById('feedback');

    const correctAnswers = {
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

    const totalQuestions = Object.keys(correctAnswers).length;
    totalSpan.textContent = totalQuestions;

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let score = 0;
        const formData = new FormData(quizForm);

        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = formData.get(question);
            const questionBlock = document.getElementById(`question${question.slice(1)}`);
            const optionLabels = questionBlock.querySelectorAll('.options li label');

            optionLabels.forEach(label => {
                label.classList.remove('correct', 'incorrect');
                const input = label.querySelector('input');
                if (input.value === correctAnswer) {
                    label.classList.add('correct');
                }
                if (input.checked && input.value !== correctAnswer) {
                    label.classList.add('incorrect');
                }
            });

            if (userAnswer === correctAnswer) {
                score++;
            }
        }

        scoreSpan.textContent = score;

        if (score === totalQuestions) {
            feedbackSpan.textContent = 'بسیار عالی، هستی قهرمان! 🌟 تو به همه سوالات پاسخ صحیح دادی!';
            feedbackSpan.style.color = '#155724';
        } else if (score >= totalQuestions / 2) {
            feedbackSpan.textContent = 'عملکرد خوبی داشتی! با کمی مرور بیشتر، میتونی به نتیجه کامل برسی.';
            feedbackSpan.style.color = '#856404';
        } else {
            feedbackSpan.textContent = 'نگران نباش! این آزمون برای پیدا کردن نقاط ضعف بود. دوباره تلاش کن!';
            feedbackSpan.style.color = '#721c24';
        }

        resultsContainer.classList.remove('hidden');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
});