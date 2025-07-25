// تابع برای رندر کردن یک سوال
function renderQuestion(question) {
    return `
        <div class="question-card">
            <div class="question-header">
                <div class="question-info">
                    <div class="question-meta">
                        <span class="question-number">سوال ${question.id}</span>
                        <div class="correct-answer">${question.correctAnswer}</div>
                    </div>
                    <h3 class="question-title">${question.title}</h3>
                </div>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="question-content">
                <div class="content-inner">
                    ${renderSections(question.sections)}
                </div>
            </div>
        </div>
    `;
}

// تابع برای رندر کردن بخش‌های مختلف سوال
function renderSections(sections) {
    let html = '';
    
    // بخش تحلیل پاسخ صحیح
    if (sections.correctAnalysis) {
        html += `
            <div class="section correct-analysis">
                <div class="section-header">${sections.correctAnalysis.title}</div>
                <div class="section-content">
                    <p>${sections.correctAnalysis.content}</p>
                    ${sections.correctAnalysis.bookReference ? 
                        `<div class="book-reference">📚 مرجع کتاب: ${sections.correctAnalysis.bookReference}</div>` 
                        : ''}
                </div>
            </div>
        `;
    }
    
    // بخش گزینه‌های غلط
    if (sections.wrongOptions) {
        html += `
            <div class="section wrong-options">
                <div class="section-header">${sections.wrongOptions.title}</div>
                <div class="section-content">
                    ${sections.wrongOptions.content.map(option => `
                        <div class="option-item">
                            <div class="option-title">${option.option}</div>
                            <p>${option.explanation}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // بخش دام‌ها و تله‌ها
    if (sections.traps) {
        html += `
            <div class="section traps">
                <div class="section-header">${sections.traps.title}</div>
                <div class="section-content">
                    ${sections.traps.content.map(trap => `
                        <div class="trap-item">
                            <div class="trap-title">${trap.trap}</div>
                            <p>${trap.explanation}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // بخش توصیه‌های مشاور
    if (sections.advice) {
        html += `
            <div class="section advice">
                <div class="section-header">${sections.advice.title}</div>
                <div class="section-content">
                    <p>${sections.advice.content}</p>
                </div>
            </div>
        `;
    }
    
    return html;
}

// تابع اصلی برای رندر کردن همه سوالات
function renderAllQuestions() {
    const container = document.getElementById('questionsContainer');
    const questions = getAllQuestions();
    
    if (questions.length === 0) {
        container.innerHTML = '<p>هیچ سوالی یافت نشد.</p>';
        return;
    }
    
    const questionsHTML = questions.map(question => renderQuestion(question)).join('');
    container.innerHTML = questionsHTML;
    
    // فعال‌سازی accordion پس از رندر
    initializeAccordion();
}

// اجرای برنامه پس از بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {
    renderAllQuestions();
});