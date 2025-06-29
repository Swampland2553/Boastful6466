document.addEventListener('DOMContentLoaded', function() {
    // تنظیم تاریخ امروز به صورت خودکار
    const today = new Date();
    const persianDate = new Intl.DateTimeFormat('fa-IR').format(today);
    
    const dateFields = document.querySelectorAll('.auto-date');
    dateFields.forEach(field => {
        if (field) field.value = persianDate;
    });
    
    // مدیریت تغییر تم (روشن/تاریک)
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    // بررسی تم ذخیره شده در localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }
    
    // تابع تغییر تم
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }
    
    // اضافه کردن رویداد برای تغییر تم
    toggleSwitch.addEventListener('change', switchTheme);

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
