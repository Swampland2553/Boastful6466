addQuestion({
    id: 4,
    title: "سوال ۴: تقسیم قطر در ذوزنقه",
    difficulty: "دشوار",
    correctAnswer: "گزینه ۳",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>این سوال دقیقاً مشابه سوال ۳ است، اما با داده‌های متفاوت. در ذوزنقه، چون <code>AB || CD</code>، مثلث‌های <code>OAB</code> و <code>OCD</code> متشابه هستند.</p>
                <p>نسبت تشابه (k) برابر است با نسبت اضلاع موازی:</p>
                <div class="math-formula">k = AB / CD = 6 / 9 = 2 / 3</div>
                <p>این نسبت برای تمام اجزای متناظر دو مثلث (اضلاع، ارتفاع‌ها، میانه‌ها) برقرار است. پس:</p>
                <div class="math-formula">OB / OD = 2 / 3</div>
                <p>ما طول کل قطر BD را داریم: <code>BD = OB + OD = 20</code>.</p>
                <p>از تکنیک "حل دستگاه با استفاده از تناسب" استفاده می‌کنیم. فرض کنیم <code>OB = 2x</code> و <code>OD = 3x</code>.</p>
                <div class="math-formula">OB + OD = 2x + 3x = 5x</div>
                <div class="math-formula">5x = 20</div>
                <div class="math-formula">x = 4</div>
                <p>طول OB برابر 2x بود، پس:</p>
                <div class="math-formula">OB = 2 × 4 = 8</div>
            `,
            bookReference: "استفاده از نسبت تشابه برای تقسیم پاره‌خط"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه ۱ (۶):",
                    explanation: "این طول AB است و ربطی به OB ندارد."
                },
                {
                    option: "گزینه ۲ (۷.۵):",
                    explanation: "ممکن است از تقسیم نابرابر به دست آید."
                },
                {
                    option: "گزینه ۴ (۱۰):",
                    explanation: "اگر دانش‌آموز به اشتباه دو مثلث را مساوی فرض کند و قطر را نصف کند."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "عدم درک تکنیک 2x و 3x:",
                    explanation: "دانش‌آموز ممکن است نداند با BD = 20 چه کار کند. تکنیک گرفتن 2x و 3x بسیار کلیدی است."
                },
                {
                    trap: "اشتباه در محاسبه:",
                    explanation: "ممکن است دانش‌آموز x=4 را به عنوان جواب نهایی انتخاب کند یا به اشتباه OB را 3x در نظر بگیرد و به جواب ۱۲ برسد."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "وقتی نسبت دو جزء را داری و مجموع یا تفاضل آن‌ها را بهت دادن، بهترین راه استفاده از متغیر x (مثل 2x و 3x) است. این تکنیک در حل مسائل نسبت در تمام دروس کاربرد دارد."
        }
    }
});