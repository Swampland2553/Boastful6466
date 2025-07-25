// منطق اصلی برنامه
document.addEventListener('DOMContentLoaded', function() {
    initializeAccordion();
    renderQuestions();
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
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="question-number">سوال ${question.id}</span>
                <span class="correct-answer">پاسخ صحیح: ${question.correctAnswer}</span>
            </div>
            <h2 class="question-title">${question.title}</h2>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="question-content">
            <div class="content-inner">
                ${question.image ? `<div class="question-image"><img src="${question.image}" alt="تصویر سوال ${question.id}"></div>` : ''}
                ${createSectionsHTML(question.sections)}
            </div>
        </div>
    `;
    
    return questionDiv;
}

function createSectionsHTML(sections) {
    let html = '';
    
    if (sections.correctAnalysis) {
        html += createAccordionSection('correct-analysis', sections.correctAnalysis);
    }
    
    if (sections.wrongOptions) {
        html += createAccordionSection('wrong-options', sections.wrongOptions);
    }
    
    if (sections.traps) {
        html += createAccordionSection('traps', sections.traps);
    }
    
    if (sections.advice) {
        html += createAccordionSection('advice', sections.advice);
    }
    
    return html;
}

function createAccordionSection(type, section) {
    const typeClasses = {
        'correct-analysis': 'correct-analysis',
        'wrong-options': 'wrong-options',
        'traps': 'traps',
        'advice': 'advice'
    };
    
    let contentHTML = '';
    
    if (Array.isArray(section.content)) {
        if (type === 'wrong-options') {
            contentHTML = section.content.map(item => `
                <div class="option-item">
                    <div class="option-title">${item.option}</div>
                    <div>${item.explanation}</div>
                </div>
            `).join('');
        } else if (type === 'traps') {
            contentHTML = section.content.map(item => `
                <div class="trap-item">
                    <div class="trap-title">${item.trap}</div>
                    <div>${item.explanation}</div>
                </div>
            `).join('');
        }
    } else {
        contentHTML = `<div>${section.content}</div>`;
    }
    
    if (section.bookReference) {
        contentHTML += `<div class="book-reference">${section.bookReference}</div>`;
    }
    
    return `
        <div class="accordion-section">
            <div class="accordion-header ${typeClasses[type]}">
                <span>${section.title}</span>
                <span class="accordion-toggle">▼</span>
            </div>
            <div class="accordion-content">
                <div class="accordion-inner">
                    ${contentHTML}
                </div>
            </div>
        </div>
    `;
}