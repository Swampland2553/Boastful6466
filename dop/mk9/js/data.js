// تعریف آرایه اصلی و تابع addQuestion
window.questionsData = [];

function addQuestion(questionData) {
    window.questionsData.push(questionData);
}

// تابع کمکی برای تعیین سطح دشواری
function getDifficultyClass(difficulty) {
    switch(difficulty) {
        case 'ساده': return 'difficulty-easy';
        case 'متوسط': return 'difficulty-medium';
        case 'دشوار': return 'difficulty-hard';
        case 'خیلی دشوار': return 'difficulty-very-hard';
        default: return 'difficulty-medium';
    }
}