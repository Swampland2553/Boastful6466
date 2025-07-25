addQuestion({
    id: 10,
    title: "سوال ۱۰: خیلی دشوار (خلاقیت و حل مسئله ترکیبی)",
    correctAnswer: "گزینه (د)",
    difficulty: "خیلی دشوار",
    sections: {
        correctAnalysis: {
            title: "تحلیل سوال:",
            content: `سوال یک نمودار اسپیروگرام را توصیف می‌کند و از ما می‌خواهد گزینه صحیح را بر اساس تحلیل این نمودار پیدا کنیم.
            
**راه حل (تحلیل مفاهیم اسپیروگرام):**
1. **هوای جاری (Tidal Volume - TV):** حجم هوایی که در یک دم و بازدم معمولی جابجا می‌شود. حدود ۰.۵ لیتر.
2. **حجم ذخیره دمی (Inspiratory Reserve Volume - IRV):** حجمی که بعد از یک دم معمولی، می‌توانیم با یک دم عمیق اضافه وارد ریه کنیم. حدود ۲.۵ تا ۳ لیتر.
3. **حجم ذخیره بازدمی (Expiratory Reserve Volume - ERV):** حجمی که بعد از یک بازدم معمولی، می‌توانیم با یک بازدم عمیق خارج کنیم. حدود ۱ لیتر.
4. **ظرفیت حیاتی (Vital Capacity - VC):** مجموع سه حجم بالا. (VC = TV + IRV + ERV). حداکثر هوایی که می‌توانیم جابجا کنیم.
5. **هوای باقی‌مانده (Residual Volume - RV):** حجمی از هوا که حتی بعد از یک بازدم عمیق در ریه‌ها باقی می‌ماند و از روی هم خوابیدن حبابک‌ها جلوگیری می‌کند. **این حجم با اسپیرومتر قابل اندازه‌گیری نیست.**
6. **ظرفیت تام ریه (Total Lung Capacity - TLC):** مجموع ظرفیت حیاتی و هوای باقی‌مانده. (TLC = VC + RV).`,
            bookReference: "فصل ۳، گفتار ۲، شکل و متن مربوط به \"حجم‌های تنفسی\"."
        },
        wrongOptions: {
            title: "بررسی گزینه‌ها با توجه به نمودار فرضی:",
            content: [
                {
                    option: "گزینه (الف):",
                    explanation: "حجم هوای جاری (نوسانات کوچک نمودار) حدود ۰.۵ لیتر است، نه ۲.۵ لیتر. ۲.۵ لیتر حدود حجم ذخیره دمی است. (غلط)"
                },
                {
                    option: "گزینه (ب):",
                    explanation: "ظرفیت حیاتی مجموع حداکثر هوای قابل جابجایی است. در نمودار، این معمولاً فاصله عمودی بین قله دم عمیق و دره بازدم عمیق است. اگر ۱، ۲ و ۳ به ترتیب IRV, TV, ERV باشند، این گزینه درست است. اما طراحان معمولاً با شماره‌گذاری بازی می‌کنند."
                },
                {
                    option: "گزینه (ج):",
                    explanation: "حجم ذخیره بازدمی (ERV) تفاوت بین پایین‌ترین نقطه بازدم معمولی و پایین‌ترین نقطه بازدم عمیق است. شماره‌گذاری‌ها مبهم است و نمی‌شود با قطعیت گفت."
                },
                {
                    option: "گزینه (د):",
                    explanation: "این یک حقیقت علمی در مورد اسپیروگرام است. **هوای باقی‌مانده (RV) هرگز از ریه‌ها خارج نمی‌شود و در نتیجه با دستگاه اسپیرومتر که حجم هوای ورودی و خروجی را اندازه می‌گیرد، قابل سنجش نیست.** این گزینه یک گزاره قطعی و صحیح است که به تحلیل دقیق نمودار هم نیاز ندارد."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "تله (گزاره علمی در برابر تحلیل نمودار):",
                    explanation: "گاهی در سوالات نموداری، یک گزینه یک حقیقت علمی ثابت و غیرقابل انکار است. این گزینه معمولاً جواب درست است، چون تحلیل نمودار ممکن است به دلیل مقیاس نبودن یا شماره‌گذاری مبهم، دچار خطا شود. طراح می‌خواهد بداند آیا تو مفاهیم پایه‌ای را بلد هستی یا فقط دنبال تحلیل شکلی هستی."
                }
            ]
        },
        advice: {
            title: "توصیه مشاور:",
            content: "قهرمان، این سوال به ما یاد می‌دهد که همیشه دنبال قطعی‌ترین گزینه باشیم. وقتی یک گزاره علمی ۱۰۰٪ درست را می‌بینی، روش شک نکن. این نشان می‌دهد که حفظ بودن تعاریف و مفاهیم اصلی، گاهی از تحلیل‌های پیچیده هم مهم‌تر است."
        }
    }
});