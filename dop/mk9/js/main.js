// منطق اصلی برنامه
function renderQuestions() {
    const container = document.getElementById('questions-container');
    
    if (!container || !window.questionsData) {
        console.error('Container یا questionsData یافت نشد');
        return;
    }
    
    let html = '';
    
    window.questionsData.forEach(question => {
        html += `
            <div class="question-card">
                <div class="question-header">
                    <div class="question-info">
                        <h2 class="question-title">${question.title}</h2>
                        <span class="difficulty-badge ${getDifficultyClass(question.difficulty)}">${question.difficulty}</span>
                    </div>
                    <div class="header-right">
                        <span class="correct-answer">${question.correctAnswer}</span>
                        <span class="toggle-icon">▼</span>
                    </div>
                </div>
                
                <div class="question-content">
                    <div class="content-inner">
                        ${renderSection(question.sections.correctAnalysis, 'correct')}
                        ${renderSection(question.sections.wrongOptions, 'wrong')}
                        ${renderSection(question.sections.traps, 'traps')}
                        ${renderSection(question.sections.advice, 'advice')}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderSection(section, type) {
    if (!section) return '';
    
    const typeClasses = {
        correct: 'section-correct',
        wrong: 'section-wrong',
        traps: 'section-traps',
        advice: 'section-advice'
    };
    
    let html = `
        <div class="accordion-section accordion-${type}">
            <div class="accordion-header">
                <h3 class="accordion-title">${section.title}</h3>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
    `;
    
    if (type === 'correct') {
        html += `<p>${section.content}</p>`;
        if (section.bookReference) {
            html += `<div class="book-reference"><strong>نشانه از کتاب درسی:</strong> ${section.bookReference}</div>`;
        }
    } else if (type === 'wrong' && Array.isArray(section.content)) {
        section.content.forEach(item => {
            html += `
                <div class="option-item">
                    <div class="option-name">${item.option}</div>
                    <p>${item.explanation}</p>
                </div>
            `;
        });
    } else if (type === 'traps' && Array.isArray(section.content)) {
        section.content.forEach(item => {
            html += `
                <div class="trap-item">
                    <div class="trap-name">${item.trap}</div>
                    <p>${item.explanation}</p>
                </div>
            `;
        });
    } else if (type === 'advice') {
        html += `<div class="advice-content">${section.content}</div>`;
    }
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// اجرای تابع پس از بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {
    // کمی تاخیر برای اطمینان از بارگذاری همه فایل‌های سوالات
    setTimeout(renderQuestions, 100);
});