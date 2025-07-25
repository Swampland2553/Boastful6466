// آرایه اصلی برای ذخیره داده‌های سوالات
window.questionsData = [];

// تابع برای اضافه کردن سوال به آرایه اصلی
function addQuestion(questionData) {
    window.questionsData.push(questionData);
}

// تابع کمکی برای تشخیص سطح دشواری
function getDifficultyClass(difficulty) {
    switch(difficulty) {
        case 'ساده':
            return 'easy';
        case 'متوسط':
            return 'medium';
        case 'دشوار':
            return 'hard';
        case 'خیلی دشوار':
            return 'very-hard';
        default:
            return 'medium';
    }
}

// تابع کمکی برای تشخیص رنگ نشان سطح دشواری
function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case 'ساده':
            return '#28a745';
        case 'متوسط':
            return '#ffc107';
        case 'دشوار':
            return '#fd7e14';
        case 'خیلی دشوار':
            return '#dc3545';
        default:
            return '#6c757d';
    }
}