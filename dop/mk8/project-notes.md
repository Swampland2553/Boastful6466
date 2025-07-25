# یادداشت‌های پروژه: تبدیل محتوای آموزشی فارسی به HTML/CSS/JS

## خلاصه پروژه
تبدیل یک فایل Markdown حاوی تحلیل سوالات زیست‌شناسی فارسی به یک وب‌سایت تعاملی با accordion و طراحی زیبا.

## ساختار فایل‌های پروژه

### 1. فایل‌های اصلی
- `index.html` - صفحه اصلی HTML
- `kk.md` - فایل محتوای اصلی (ورودی)

### 2. پوشه styles/
- `main.css` - استایل‌های اصلی و layout
- `accordion.css` - استایل‌های accordion
- `typography.css` - تایپوگرافی و فونت فارسی

### 3. پوشه js/
- `data.js` - تعریف آرایه اصلی و تابع addQuestion
- `accordion.js` - عملکرد accordion
- `main.js` - منطق اصلی برنامه
- `questions/` - پوشه حاوی فایل‌های جداگانه هر سوال

## نکات مهم فنی

### 1. مدیریت داده‌ها
```javascript
// در data.js
window.questionsData = [];
function addQuestion(questionData) {
    window.questionsData.push(questionData);
}
```

### 2. ساختار داده هر سوال
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

### 3. ترتیب بارگذاری فایل‌ها در HTML
```html
<script src="js/data.js"></script>
<script src="js/questions/question1.js"></script>
<!-- سایر فایل‌های سوالات -->
<script src="js/accordion.js"></script>
<script src="js/main.js"></script>
```

### 4. فونت فارسی
```css
@import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
font-family: 'Vazirmatn', sans-serif;
```

### 5. Accordion که همه باز می‌مانند
- هر accordion مستقل عمل می‌کند
- باز کردن یکی، بقیه را نمی‌بندد
- استفاده از `classList.toggle('active')`

## مراحل انجام پروژه

### مرحله 1: تجزیه محتوا
1. خواندن فایل MD
2. شناسایی سوالات مختلف
3. استخراج بخش‌های مختلف هر سوال:
   - پاسخ صحیح
   - تحلیل پاسخ صحیح
   - گزینه‌های غلط
   - دام‌ها و تله‌ها
   - توصیه‌های مشاور

### مرحله 2: ایجاد ساختار فایل‌ها
1. ایجاد `index.html` با ساختار اصلی
2. ایجاد فایل‌های CSS در پوشه `styles/`
3. ایجاد `js/data.js` با آرایه اصلی
4. ایجاد فایل جداگانه برای هر سوال در `js/questions/`

### مرحله 3: پیاده‌سازی عملکرد
1. نوشتن منطق accordion در `js/accordion.js`
2. نوشتن منطق رندر کردن در `js/main.js`
3. تست و رفع باگ‌ها

## الگوهای مهم در محتوا

### 1. شناسایی سوالات
- هر سوال با `### **تحلیل و پاسخ تشریحی سوال ۱**` شروع می‌شود
- پاسخ صحیح: `**پاسخ صحیح: گزینه (ج)**`

### 2. بخش‌های مختلف
- `#### **بررسی پاسخ صحیح:**`
- `#### **چرا گزینه‌های دیگر غلط هستند؟**`
- `#### **دام‌ها و تله‌های تستی این مبحث:**`
- `#### **توصیه‌های مشاور:**`

### 3. مراجع کتاب
- `*   **نشونه از کتاب درسی (صفحه ۳۶، شکل ۴ و متن):**`

## نکات طراحی UI/UX

### 1. رنگ‌بندی
- پس‌زمینه: gradient آبی-بنفش
- کارت‌ها: سفید با شفافیت
- هدر سوالات: gradient آبی
- بخش‌های مختلف: رنگ‌های متمایز (سبز، قرمز، نارنجی، آبی)

### 2. انیمیشن‌ها
- Smooth transition برای accordion
- Hover effects روی کارت‌ها
- Transform برای آیکون‌ها

### 3. Responsive Design
- Mobile-first approach
- Breakpoint در 768px
- تنظیم اندازه فونت و padding

## مشکلات رایج و راه‌حل‌ها

### 1. مشکل ReferenceError
- **علت**: questionsData تعریف نشده
- **راه‌حل**: استفاده از `window.questionsData` و `addQuestion()`

### 2. مشکل ترتیب بارگذاری
- **علت**: فایل‌ها به ترتیب اشتباه لود می‌شوند
- **راه‌حل**: ترتیب صحیح در HTML

### 3. مشکل فونت فارسی
- **علت**: فونت لود نمی‌شود
- **راه‌حل**: استفاده از CDN و fallback fonts

## چک‌لیست نهایی

- [ ] همه سوالات نمایش داده می‌شوند
- [ ] Accordion درست کار می‌کند
- [ ] فونت فارسی لود شده
- [ ] طراحی responsive است
- [ ] رنگ‌بندی و انیمیشن‌ها درست هستند
- [ ] محتوا به درستی پارس شده
- [ ] هیچ خطای JavaScript وجود ندارد

## نکات برای پروژه‌های آینده

1. **تجزیه محتوا**: همیشه ابتدا ساختار محتوا را بررسی کن
2. **فایل‌های جداگانه**: برای پروژه‌های بزرگ، فایل‌ها را تقسیم کن
3. **Global scope**: برای اشتراک داده بین فایل‌ها از window استفاده کن
4. **ترتیب بارگذاری**: ترتیب script tags مهم است
5. **تست مرحله‌ای**: هر بخش را جداگانه تست کن

---

**نکته مهم**: این یادداشت‌ها برای پروژه‌های مشابه با محتوای فارسی و ساختار accordion مفید خواهند بود.