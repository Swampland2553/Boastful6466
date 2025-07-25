// منطق اصلی برای رندر کردن سوالات
function renderQuestions() {
    const container = document.getElementById('questions-container');
    
    if (!container) {
        console.error('Questions container not found!');
        return;
    }
    
    if (!window.questionsData || window.questionsData.length === 0) {
        container.innerHTML = '<p>هیچ سوالی یافت نشد.</p>';
        return;
    }
    
    let html = '';
    
    window.questionsData.forEach(question => {
        html += generateQuestionHTML(question);
    });
    
    container.innerHTML = html;
}

// تولید HTML برای هر سوال
function generateQuestionHTML(question) {
    const difficultyClass = getDifficultyClass(question.difficulty);
    const difficultyColor = getDifficultyColor(question.difficulty);
    
    let html = `
        <div class="question-card" data-question-id="${question.id}">
            <div class="question-header">
                <div>
                    <h3 class="question-title">${question.title}</h3>
                </div>
                <div class="question-info">
                    <span class="difficulty-badge" style="background-color: ${difficultyColor};">
                        ${question.difficulty}
                    </span>
                    <span class="correct-answer">${question.correctAnswer}</span>
                </div>
                <span class="toggle-icon">+</span>
            </div>
            <div class="question-content">
    `;
    
    // اضافه کردن تصویر اگر وجود دارد
    if (question.imagePath) {
        html += `<img src="${question.imagePath}" alt="تصویر سوال ${question.id}" class="question-image">`;
    }
    
    // رندر بخش‌های مختلف
    if (question.sections.correctAnalysis) {
        html += generateSectionHTML('correct-analysis', question.sections.correctAnalysis);
    }
    
    if (question.sections.wrongOptions) {
        html += generateWrongOptionsHTML(question.sections.wrongOptions);
    }
    
    if (question.sections.traps) {
        html += generateTrapsHTML(question.sections.traps);
    }
    
    if (question.sections.advice) {
        html += generateSectionHTML('advice', question.sections.advice);
    }
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// تولید HTML برای بخش‌های عادی
function generateSectionHTML(sectionType, section) {
    let html = `
        <div class="section ${sectionType}">
            <div class="accordion-item">
                <div class="accordion-header">
                    <h4 class="accordion-title">${section.title}</h4>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="section-content">
                        ${section.content}
    `;
    
    if (section.bookReference) {
        html += `<div class="book-reference">${section.bookReference}</div>`;
    }
    
    html += `
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// تولید HTML برای بخش گزینه‌های غلط
function generateWrongOptionsHTML(wrongOptions) {
    let html = `
        <div class="section wrong-options">
            <div class="accordion-item">
                <div class="accordion-header">
                    <h4 class="accordion-title">${wrongOptions.title}</h4>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="section-content">
    `;
    
    wrongOptions.content.forEach(option => {
        html += `
            <div class="option-item">
                <div class="option-name">${option.option}</div>
                <div class="option-explanation">${option.explanation}</div>
            </div>
        `;
    });
    
    html += `
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// تولید HTML برای بخش دام‌ها
function generateTrapsHTML(traps) {
    let html = `
        <div class="section traps">
            <div class="accordion-item">
                <div class="accordion-header">
                    <h4 class="accordion-title">${traps.title}</h4>
                    <span class="accordion-icon">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="section-content">
    `;
    
    traps.content.forEach(trap => {
        html += `
            <div class="trap-item">
                <div class="trap-name">${trap.trap}</div>
                <div class="trap-explanation">${trap.explanation}</div>
            </div>
        `;
    });
    
    html += `
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// اجرای رندر پس از بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
});