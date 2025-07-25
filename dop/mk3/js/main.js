// Main application logic
class QuestionApp {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.container = document.getElementById('questions-container');
            this.loadQuestions();
        });
    }

    loadQuestions() {
        if (!this.container) return;

        // Sort questions by ID
        const sortedQuestions = window.questionsData.sort((a, b) => a.id - b.id);

        // Generate HTML for all questions
        const questionsHTML = sortedQuestions.map(question => 
            this.generateQuestionHTML(question)
        ).join('');

        this.container.innerHTML = questionsHTML;
    }

    generateQuestionHTML(question) {
        return `
            <div class="question-item" data-question-id="${question.id}">
                <div class="question-header">
                    <div class="question-number">سوال ${question.id}</div>
                    <div class="question-title">${question.title}</div>
                    <div class="accordion-icon">+</div>
                </div>
                <div class="question-content">
                    <div class="content-inner">
                        <div class="correct-answer">
                            ${question.correctAnswer}
                        </div>
                        ${this.generateSectionsHTML(question.sections)}
                    </div>
                </div>
            </div>
        `;
    }

    generateSectionsHTML(sections) {
        let html = '';

        if (sections.correctAnalysis) {
            html += this.generateSectionHTML(sections.correctAnalysis, 'correct-analysis');
        }

        if (sections.wrongOptions) {
            html += this.generateWrongOptionsHTML(sections.wrongOptions);
        }

        if (sections.traps) {
            html += this.generateTrapsHTML(sections.traps);
        }

        if (sections.advice) {
            html += this.generateSectionHTML(sections.advice, 'advice');
        }

        return html;
    }

    generateSectionHTML(section, className) {
        let content = section.content;
        
        // Add book reference if exists
        if (section.bookReference) {
            content += `<div class="book-reference">${section.bookReference}</div>`;
        }

        return `
            <div class="section ${className}">
                <h3>${section.title}</h3>
                <p>${content}</p>
            </div>
        `;
    }

    generateWrongOptionsHTML(wrongOptions) {
        let optionsHTML = '';
        
        if (Array.isArray(wrongOptions.content)) {
            optionsHTML = wrongOptions.content.map(option => `
                <h4>${option.option}</h4>
                <p>${option.explanation}</p>
            `).join('');
        } else {
            optionsHTML = `<p>${wrongOptions.content}</p>`;
        }

        return `
            <div class="section wrong-options">
                <h3>${wrongOptions.title}</h3>
                ${optionsHTML}
            </div>
        `;
    }

    generateTrapsHTML(traps) {
        let trapsHTML = '';
        
        if (Array.isArray(traps.content)) {
            trapsHTML = traps.content.map(trap => `
                <h4>${trap.trap}</h4>
                <p>${trap.explanation}</p>
            `).join('');
        } else {
            trapsHTML = `<p>${traps.content}</p>`;
        }

        return `
            <div class="section traps">
                <h3>${traps.title}</h3>
                ${trapsHTML}
            </div>
        `;
    }
}

// Initialize the application
const app = new QuestionApp();