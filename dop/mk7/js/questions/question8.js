addQuestion({
    id: 8,
    title: "سوال ۸: نسبت مساحت‌ها در تشابه",
    difficulty: "خیلی دشوار",
    correctAnswer: "گزینه ۳",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>این سوال ترکیبی از تشابه و مساحت است.</p>
                <p>فرض کنیم مساحت مثلث <code>ADE</code> برابر <code>S</code> باشد.</p>
                <p>مساحت ذوزنقه <code>DBCE</code> برابر <code>15S</code> است.</p>
                <p>مساحت کل مثلث <code>ABC</code> برابر است با:</p>
                <div class="math-formula">S_ABC = S_ADE + S_DBCE = S + 15S = 16S</div>
                <p>می‌دانیم که نسبت مساحت‌های دو مثلث متشابه، برابر با توان دوم نسبت تشابه آنهاست:</p>
                <div class="math-formula">S_ADE / S_ABC = (k)² = (AD / AB)²</div>
                <p>جایگذاری مقادیر:</p>
                <div class="math-formula">S / 16S = (AD / AB)²</div>
                <div class="math-formula">1 / 16 = (AD / AB)²</div>
                <p>از دو طرف جذر می‌گیریم:</p>
                <div class="math-formula">AD / AB = √(1/16) = 1/4</div>
            `,
            bookReference: "کتاب درسی، صفحه ۴۵، قضیه نسبت مساحت‌ها"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه ۱ (۱/۱۶):",
                    explanation: "عدم استفاده از جذر. اگر دانش‌آموز توان دو را فراموش کند، به این جواب می‌رسد."
                },
                {
                    option: "گزینه ۲ (۱/۱۵):",
                    explanation: "استفاده از نسبت اشتباه. دانش‌آموز ممکن است بنویسد S_ADE / S_DBCE = 1/15 و از آن جذر بگیرد."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "فراموش کردن توان دوم:",
                    explanation: "فراموش کردن \"توان دوم\" در رابطه نسبت مساحت‌ها."
                },
                {
                    trap: "اشتباه در نسبت مساحت:",
                    explanation: "اشتباه گرفتن نسبت مساحت ذوزنقه با مثلث."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "هر وقت کلمه \"مساحت\" رو کنار \"تشابه\" دیدی، زنگ خطر \"توان دو\" باید تو ذهنت به صدا در بیاد! این نکته بسیار کلیدی و پرتکراره."
        }
    }
});