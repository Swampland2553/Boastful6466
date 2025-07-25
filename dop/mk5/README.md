# دفترچه پاسخ سوالات آزمون صحت‌سنجی شیمی (۲)

## توضیحات پروژه

این پروژه یک وب‌سایت تعاملی است که محتوای آموزشی فارسی را از فایل Markdown به صورت accordion های زیبا و کاربردی نمایش می‌دهد.

## ویژگی‌های پروژه

- ✨ طراحی زیبا و مدرن با gradient پس‌زمینه
- 📱 طراحی واکنش‌گرا (Responsive) برای موبایل و دسکتاپ
- 🎯 Accordion های مستقل که همه می‌توانند همزمان باز باشند
- 🎨 رنگ‌بندی متمایز برای بخش‌های مختلف هر سوال
- 🔤 فونت فارسی زیبا (Vazirmatn)
- ⚡ عملکرد سریع و روان

## ساختار فایل‌ها

```
├── index.html              # صفحه اصلی
├── styles/
│   ├── main.css           # استایل‌های اصلی و layout
│   ├── typography.css     # تایپوگرافی و فونت فارسی
│   └── accordion.css      # استایل‌های accordion
├── js/
│   ├── data.js           # تعریف آرایه اصلی و تابع addQuestion
│   ├── accordion.js      # عملکرد accordion
│   ├── main.js          # منطق اصلی برنامه
│   └── questions/       # فایل‌های جداگانه هر سوال
│       ├── question1.js
│       ├── question2.js
│       └── ...
├── fel.md               # فایل محتوای اصلی (ورودی)
├── project-notes.md     # یادداشت‌های پروژه
└── README.md           # این فایل
```

## نحوه اجرا

1. فایل `index.html` را در مرورگر باز کنید
2. یا از یک سرور محلی استفاده کنید:
   ```bash
   # با Python
   python -m http.server 8000
   
   # با Node.js (http-server)
   npx http-server
   ```

## ساختار داده هر سوال

```javascript
addQuestion({
    id: شماره_سوال,
    title: "عنوان سوال",
    correctAnswer: "گزینه صحیح",
    sections: {
        correctAnalysis: {
            title: "بررسی پاسخ صحیح:",
            content: "متن توضیح...",
            bookReference: "مرجع کتاب..."
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه الف:",
                    explanation: "توضیح..."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "نام تله:",
                    explanation: "توضیح..."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "متن توصیه..."
        }
    }
});
```

## رنگ‌بندی بخش‌ها

- 🟢 **بررسی پاسخ صحیح**: سبز
- 🔴 **گزینه‌های غلط**: قرمز  
- 🟠 **دام‌ها و تله‌ها**: نارنجی
- 🔵 **توصیه‌های مشاور**: آبی

## تکنولوژی‌های استفاده شده

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Vazirmatn Font (فونت فارسی)

## مرورگرهای پشتیبانی شده

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## مشارکت

برای اضافه کردن سوال جدید:

1. فایل جدیدی در پوشه `js/questions/` ایجاد کنید
2. از ساختار داده موجود استفاده کنید
3. فایل را به `index.html` اضافه کنید

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.