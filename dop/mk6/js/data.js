// آرایه اصلی برای نگهداری داده‌های سوالات
window.questionsData = [];

// تابع برای اضافه کردن سوال به آرایه اصلی
function addQuestion(questionData) {
    window.questionsData.push(questionData);
}

// تابع کمکی برای تمیز کردن متن
function cleanText(text) {
    return text.replace(/\*\*/g, '').trim();
}