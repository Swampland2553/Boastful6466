// منطق اصلی برنامه
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
    initializeAccordion();
});

function renderQuestions() {
    const container = document.getElementById('questions-container');
    
    window.questionsData.forEach(question => {
        const questionElement = createQuestionElement(question);
        container.appendChild(questionElement);
    });
}

function createQuestionElement(question) {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';
    
    questionDiv.innerHTML = `
        <div class="question-header">
            <h3>سوال ${question.id}</h3>
            <p class="question-title">${question.title}</p>
            <div class="correct-answer">
                <strong>پاسخ صحیح: ${question.correctAnswer}</strong>
            </div>
        </div>
        
        <div class="question-sections">
            ${createSectionHTML('correct-analysis', question.sections.correctAnalysis)}
            ${createSectionHTML('wrong-options', question.sections.wrongOptions)}
            ${createSectionHTML('traps', question.sections.traps)}
            ${createSectionHTML('advice', question.sections.advice)}
        </div>
    `;
    
    return questionDiv;
}

function createSectionHTML(sectionType, sectionData) {
    const sectionClass = `section-${sectionType}`;
    let contentHTML = '';
    
    if (sectionType === 'correct-analysis') {
        contentHTML = `
            <p>${sectionData.content}</p>
            ${sectionData.bookReference ? `<div class="book-reference"><strong>مرجع کتاب:</strong> ${sectionData.bookReference}</div>` : ''}
        `;
    } else if (sectionType === 'wrong-options' || sectionType === 'traps') {
        contentHTML = sectionData.content.map(item => `
            <div class="option-item">
                <strong>${item.option || item.trap}</strong>
                <p>${item.explanation}</p>
            </div>
        `).join('');
    } else if (sectionType === 'advice') {
        contentHTML = `<p>${sectionData.content}</p>`;
    }
    
    return `
        <div class="accordion-item ${sectionClass}">
            <div class="accordion-header">
                <span>${sectionData.title}</span>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                ${contentHTML}
            </div>
        </div>
    `;
}