document.addEventListener('DOMContentLoaded', function() {
    


    // ذخیره‌سازی خودکار فرم در localStorage
    const formElements = document.querySelectorAll('input, textarea, select');
    const formId = 'strategic-planning-form';
    
    // بارگذاری مقادیر ذخیره شده
    loadSavedForm();
    
    // ذخیره‌سازی تغییرات
    formElements.forEach(element => {
        element.addEventListener('change', saveForm);
    });
    
    // اضافه کردن رویداد برای دکمه ذخیره فرم
    const saveButton = document.getElementById('save-form');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            saveForm();
            alert('فرم با موفقیت ذخیره شد!');
        });
    }

    // اضافه کردن رویداد برای دکمه پاک کردن فرم
    const resetButton = document.getElementById('reset-form');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            if (confirm('آیا مطمئن هستید که می‌خواهید فرم را پاک کنید؟')) {
                localStorage.removeItem(formId);
                document.querySelectorAll('form')[0].reset();
            }
        });
    }
    
    // اضافه کردن رویداد برای دکمه چاپ
    const printButton = document.getElementById('print-form');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
    
    // توابع ذخیره‌سازی و بارگذاری فرم
    function saveForm() {
        const formData = {};
        formElements.forEach(element => {
            if (element.id) {
                formData[element.id] = element.value;
            }
        });
        localStorage.setItem(formId, JSON.stringify(formData));
    }
    
    function loadSavedForm() {
        const savedData = localStorage.getItem(formId);
        if (savedData) {
            const formData = JSON.parse(savedData);
            Object.keys(formData).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.value = formData[key];
                }
            });
        }
    }
});
