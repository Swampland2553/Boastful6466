# پاسخنامه تحلیلی-تشریحی آزمون هندسه

## درباره پروژه
این پروژه یک وب‌سایت تعاملی است که محتوای آموزشی فارسی درس هندسه را به صورت accordion نمایش می‌دهد. هر سوال شامل بخش‌های مختلفی مانند تحلیل پاسخ صحیح، گزینه‌های غلط، دام‌ها و تله‌ها، و توصیه‌های مشاور است.

## ویژگی‌ها
- ✅ طراحی responsive و mobile-friendly
- ✅ فونت فارسی زیبا (Vazirmatn)
- ✅ accordion های مستقل (همه می‌توانند همزمان باز باشند)
- ✅ رنگ‌بندی متمایز برای بخش‌های مختلف
- ✅ انیمیشن‌های smooth
- ✅ ساختار modular و قابل توسعه

## ساختار پروژه
```
├── index.html              # صفحه اصلی
├── styles/
│   ├── main.css           # استایل‌های اصلی
│   ├── typography.css     # فونت و تایپوگرافی
│   └── accordion.css      # استایل‌های accordion
├── js/
│   ├── data.js           # مدیریت داده‌ها
│   ├── accordion.js      # عملکرد accordion
│   ├── main.js          # منطق اصلی
│   └── questions/       # فایل‌های جداگانه سوالات
│       ├── question1.js
│       ├── question2.js
│       └── ...
└── *.png               # تصاویر سوالات
```

## نحوه استفاده
1. فایل `index.html` را در مرورگر باز کنید
2. روی هر سوال کلیک کنید تا محتوای آن باز شود
3. روی هر بخش (تحلیل، گزینه‌های غلط، دام‌ها، توصیه‌ها) کلیک کنید

## اضافه کردن سوال جدید
برای اضافه کردن سوال جدید:

1. فایل جدیدی در پوشه `js/questions/` ایجاد کنید (مثل `question11.js`)
2. از الگوی زیر استفاده کنید:

```javascript
addQuestion({
    id: 11,
    title: "عنوان سوال",
    correctAnswer: "گزینه صحیح",
    image: "نام_فایل_تصویر.png", // اختیاری
    sections: {
        correctAnalysis: {
            title: "بررسی پاسخ صحیح:",
            content: "محتوای HTML",
            bookReference: "مرجع کتاب" // اختیاری
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه الف:",
                    explanation: "توضیح"
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "نام تله:",
                    explanation: "توضیح"
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "محتوای توصیه"
        }
    }
});
```

3. فایل جدید را به `index.html` اضافه کنید:
```html
<script src="js/questions/question11.js"></script>
```

## تکنولوژی‌های استفاده شده
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript
- Vazirmatn Font

## سازگاری مرورگر
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## نکات فنی
- استفاده از `window.questionsData` برای اشتراک داده بین فایل‌ها
- ترتیب بارگذاری فایل‌ها مهم است
- همه accordion ها مستقل عمل می‌کنند
- طراحی mobile-first

---
**توسعه داده شده برای ماهان عزیز 🚀**