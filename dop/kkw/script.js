// DOM Elements
const form = document.getElementById('sessionForm');

// Initialize the form
document.addEventListener('DOMContentLoaded', function () {
    initializeForm();
    setupEventListeners();
});

// Initialize form functionality
function initializeForm() {
    // Form is now fully print-friendly with no interactive elements
}

// Setup event listeners
function setupEventListeners() {
    // Form submission
    form.addEventListener('submit', handleFormSubmit);

    // Other method checkbox toggle
    const otherCheckbox = document.querySelector('input[value="other"]');
    const otherInput = document.querySelector('.other-input');

    otherCheckbox.addEventListener('change', function () {
        otherInput.style.display = this.checked ? 'block' : 'none';
        if (!this.checked) {
            otherInput.value = '';
        }
    });

    // Auto-save functionality (optional)
    setupAutoSave();
}

// Rating functionality removed - now using simple input box for manual writing

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate required fields
    if (!validateForm()) {
        return;
    }

    // Collect form data
    const formData = collectFormData();

    // Save data (you can modify this to send to server)
    saveFormData(formData);

    // Show success message
    showSuccessMessage();

    // Add animation
    form.classList.add('form-submitted');
    setTimeout(() => {
        form.classList.remove('form-submitted');
    }, 500);
}

// Validate form
function validateForm() {
    const requiredFields = [
        'studentName',
        'counselorName',
        'sessionDate',
        'sessionNumber'
    ];

    let isValid = true;

    requiredFields.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (!field.value.trim()) {
            field.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('لطفاً تمام فیلدهای ضروری را پر کنید.');
    }

    return isValid;
}

// Collect form data
function collectFormData() {
    const formData = new FormData(form);
    const data = {};

    // Convert FormData to regular object
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            // Handle multiple values (checkboxes)
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }

    // Add timestamp
    data.timestamp = new Date().toISOString();

    return data;
}

// Save form data to localStorage
function saveFormData(data) {
    try {
        const sessionId = `session_${Date.now()}`;
        localStorage.setItem(sessionId, JSON.stringify(data));

        // Also save as latest session
        localStorage.setItem('latestSession', JSON.stringify(data));

        console.log('Form data saved successfully');
    } catch (error) {
        console.error('Error saving form data:', error);
        alert('خطا در ذخیره اطلاعات');
    }
}

// Show success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    message.textContent = 'گزارش با موفقیت ذخیره شد!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Auto-save functionality
function setupAutoSave() {
    let autoSaveTimer;

    form.addEventListener('input', function () {
        clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            const formData = collectFormData();
            localStorage.setItem('autoSave', JSON.stringify(formData));
        }, 2000); // Auto-save after 2 seconds of inactivity
    });

    // Load auto-saved data on page load
    const autoSavedData = localStorage.getItem('autoSave');
    if (autoSavedData) {
        try {
            const data = JSON.parse(autoSavedData);
            loadFormData(data);
        } catch (error) {
            console.error('Error loading auto-saved data:', error);
        }
    }
}

// Load form data
function loadFormData(data) {
    Object.keys(data).forEach(key => {
        const elements = document.querySelectorAll(`[name="${key}"]`);

        elements.forEach(element => {
            if (element.type === 'checkbox' || element.type === 'radio') {
                if (Array.isArray(data[key])) {
                    element.checked = data[key].includes(element.value);
                } else {
                    element.checked = element.value === data[key];
                }
            } else {
                element.value = data[key] || '';
            }
        });
    });
}

// Print functionality
function printForm() {
    // Hide action buttons before printing
    const actionButtons = document.querySelector('.action-buttons');
    actionButtons.style.display = 'none';

    window.print();

    // Show action buttons after printing
    setTimeout(() => {
        actionButtons.style.display = 'flex';
    }, 1000);
}

// Export data functionality
function exportData() {
    const formData = collectFormData();
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `session_report_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// Load previous session data
function loadPreviousSession() {
    const latestSession = localStorage.getItem('latestSession');
    if (latestSession) {
        try {
            const data = JSON.parse(latestSession);
            loadFormData(data);
            alert('اطلاعات جلسه قبلی بارگذاری شد');
        } catch (error) {
            console.error('Error loading previous session:', error);
            alert('خطا در بارگذاری اطلاعات جلسه قبلی');
        }
    } else {
        alert('هیچ جلسه قبلی یافت نشد');
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl+S to save
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        form.dispatchEvent(new Event('submit'));
    }

    // Ctrl+P to print
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printForm();
    }
});

// Add additional utility functions
const FormUtils = {
    // Clear all form data
    clearForm: function () {
        if (confirm('آیا مطمئن هستید که می‌خواهید تمام اطلاعات فرم را پاک کنید؟')) {
            form.reset();
            localStorage.removeItem('autoSave');
            // Rating scale removed - no need to reset
        }
    },

    // Get form completion percentage
    getCompletionPercentage: function () {
        const allInputs = form.querySelectorAll('input, textarea, select');
        const filledInputs = Array.from(allInputs).filter(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                return input.checked;
            }
            return input.value.trim() !== '';
        });

        return Math.round((filledInputs.length / allInputs.length) * 100);
    },

    // Validate specific sections
    validateSection: function (sectionNumber) {
        const section = document.querySelectorAll('.form-section')[sectionNumber - 1];
        const inputs = section.querySelectorAll('input, textarea, select');

        let isValid = true;
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                input.style.borderColor = '#dc3545';
                isValid = false;
            }
        });

        return isValid;
    }
};

// Make functions globally available
window.printForm = printForm;
window.exportData = exportData;
window.loadPreviousSession = loadPreviousSession;
window.FormUtils = FormUtils;