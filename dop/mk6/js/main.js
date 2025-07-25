// منطق اصلی برنامه
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
});

function renderQuestions() {
    const container = document.getElementById('questions-container');
    
    if (!window.questionsData || window.questionsData.length === 0) {
        container.innerHTML = '<p>هیچ سوالی یافت نشد.</p>';
        return;
    }
    
    let html = '';
    
    window.questionsData.forEach(question => {
        html += createQuestionHTML(question);
    });
    
    container.innerHTML = html;
}

function createQuestionHTML(question) {
    return `
        <div class="accordion-item">
            <div class="accordion-header" data-question="${question.id}">
                <div class="accordion-title">
                    ${question.title}
                    <div style="font-size: 0.9rem; margin-top: 5px; color: rgba(255,255,255,0.8);">
                        پاسخ صحیح: ${question.correctAnswer}
                    </div>
                </div>
                <div class="accordion-icon">▼</div>
            </div>
            <div class="accordion-content">
                <div class="accordion-body">
                    ${createSectionsHTML(question.sections)}
                </div>
            </div>
        </div>
    `;
}

function createSectionsHTML(sections) {
    let html = '';
    
    // بخش تحلیل پاسخ صحیح
    if (sections.correctAnalysis) {
        html += `
            <div class="section correct-analysis">
                <h4 class="section-title">${sections.correctAnalysis.title}</h4>
                <div>${formatContent(sections.correctAnalysis.content)}</div>
                ${sections.correctAnalysis.bookReference ? 
                    `<div class="book-reference">📚 مرجع کتاب درسی: ${sections.correctAnalysis.bookReference}</div>` 
                    : ''}
            </div>
        `;
    }
    
    // بخش گزینه‌های غلط
    if (sections.wrongOptions) {
        html += `
            <div class="section wrong-options">
                <h4 class="section-title">${sections.wrongOptions.title}</h4>
                <div>${createOptionsHTML(sections.wrongOptions.content)}</div>
            </div>
        `;
    }
    
    // بخش دام‌ها و تله‌ها
    if (sections.traps) {
        html += `
            <div class="section traps">
                <h4 class="section-title">${sections.traps.title}</h4>
                <div>${createTrapsHTML(sections.traps.content)}</div>
            </div>
        `;
    }
    
    // بخش توصیه‌های مشاور
    if (sections.advice) {
        html += `
            <div class="section advice">
                <h4 class="section-title">${sections.advice.title}</h4>
                <div>${formatContent(sections.advice.content)}</div>
            </div>
        `;
    }
    
    return html;
}

function createOptionsHTML(options) {
    if (typeof options === 'string') {
        return formatContent(options);
    }
    
    let html = '';
    options.forEach(option => {
        html += `
            <div class="option-item">
                <div class="option-name">${option.option}</div>
                <div>${formatContent(option.explanation)}</div>
            </div>
        `;
    });
    return html;
}

function createTrapsHTML(traps) {
    if (typeof traps === 'string') {
        return formatContent(traps);
    }
    
    let html = '';
    traps.forEach(trap => {
        html += `
            <div class="trap-item">
                <div class="trap-name">${trap.trap}</div>
                <div>${formatContent(trap.explanation)}</div>
            </div>
        `;
    });
    return html;
}

function formatContent(content) {
    if (!content) return '';
    
    // تبدیل متن به HTML با حفظ فرمت
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>')
        .replace(/^/, '<p>')
        .replace(/$/, '</p>');
}