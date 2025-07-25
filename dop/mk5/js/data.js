// آرایه اصلی برای نگهداری داده‌های سوالات
window.questionsData = [];

// تابع برای اضافه کردن سوال به آرایه اصلی
function addQuestion(questionData) {
    window.questionsData.push(questionData);
}

// تابع برای دریافت همه سوالات
function getAllQuestions() {
    return window.questionsData;
}