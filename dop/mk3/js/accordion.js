// Accordion functionality
class Accordion {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.bindEvents();
        });
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.question-header')) {
                const header = e.target.closest('.question-header');
                const questionItem = header.closest('.question-item');
                this.toggleQuestion(questionItem);
            }
        });
    }

    toggleQuestion(questionItem) {
        const isActive = questionItem.classList.contains('active');
        
        if (isActive) {
            this.closeQuestion(questionItem);
        } else {
            this.openQuestion(questionItem);
        }
    }

    openQuestion(questionItem) {
        questionItem.classList.add('active');
        const content = questionItem.querySelector('.question-content');
        const contentInner = content.querySelector('.content-inner');
        
        // Set max-height to the scroll height for smooth animation
        content.style.maxHeight = contentInner.scrollHeight + 'px';
        
        // Add a small delay to ensure smooth animation
        setTimeout(() => {
            content.style.maxHeight = '5000px';
        }, 300);
    }

    closeQuestion(questionItem) {
        questionItem.classList.remove('active');
        const content = questionItem.querySelector('.question-content');
        content.style.maxHeight = '0px';
    }

    openAllQuestions() {
        const questionItems = document.querySelectorAll('.question-item');
        questionItems.forEach(item => {
            if (!item.classList.contains('active')) {
                this.openQuestion(item);
            }
        });
    }

    closeAllQuestions() {
        const questionItems = document.querySelectorAll('.question-item');
        questionItems.forEach(item => {
            if (item.classList.contains('active')) {
                this.closeQuestion(item);
            }
        });
    }
}

// Initialize accordion
const accordion = new Accordion();