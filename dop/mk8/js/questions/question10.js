addQuestion({
    id: 10,
    title: "سوال خیلی دشوار: (تحلیل گزاره‌ها)",
    correctAnswer: "گزینه د",
    sections: {
        correctAnalysis: {
            title: "بررسی پاسخ صحیح:",
            content: `<p><strong>تحلیل گزاره‌ها:</strong></p>
                     <p><strong>الف) نسبت مساحت مثلث ADE به مساحت ذوزنقه DBCE برابر با (AD/DB)² است.</strong></p>
                     <p>این گزاره <strong>غلط</strong> است. نسبت مساحت مثلث ADE به مثلث <strong>بزرگ ABC</strong> برابر با (AD/AB)² است. نسبت به ذوزنقه فرمول پیچیده‌تری دارد.</p>
                     
                     <p><strong>ب) خطی که از رأس A و وسط پاره‌خط DE می‌گذرد، از وسط پاره‌خط BC نیز می‌گذرد.</strong></p>
                     <p>این گزاره <strong>صحیح</strong> است. این خط، میانه مثلث ADE است و چون دو مثلث متشابه هستند، امتداد آن میانه مثلث ABC نیز خواهد بود.</p>
                     
                     <p><strong>ج) نسبت ارتفاع وارد بر DE در مثلث ADE به ارتفاع وارد بر BC در مثلث ABC برابر با نسبت AD/AB است.</strong></p>
                     <p>این گزاره <strong>صحیح</strong> است. در مثلث‌های متشابه، نسبت تمام اجزای متناظر (از جمله ارتفاع‌ها، میانه‌ها و نیمسازها) با نسبت تشابه (که همان AD/AB است) برابر است.</p>
                     
                     <p><strong>د) اگر H پای ارتفاع وارد از A بر BC باشد، فاصله نقطه A تا خط DE نصف AH است.</strong></p>
                     <p>این گزاره <strong>لزوماً صحیح نیست</strong>. این فقط در حالتی صحیح است که DE میان‌خط باشد، یعنی D وسط AB باشد (AD=DB). در این حالت نسبت تشابه ۱/۲ می‌شود و فاصله A تا DE نصف ارتفاع کل (AH) خواهد بود. اما در حالت کلی، این نسبت برابر با نسبت تشابه (AD/AB) است، نه لزوماً ۱/۲.</p>`
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "\"لزوماً صحیح نیست\":",
                    explanation: "سوال می‌پرسد \"لزوماً صحیح نیست\". یعنی گزاره‌ای را پیدا کن که \"همیشه\" صحیح نباشد. گزاره (د) فقط گاهی صحیح است و در بقیه حالات غلط است. در چنین مواردی، گزینه‌ای که یک شرط خاص برای صحت نیاز دارد جواب صحیح‌تری برای \"لزوماً صحیح نیست\" می‌باشد."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "ماهان عزیز، این تحلیل‌ها رو یک بار دیگه مرور کن. ببین کجاها دام تستی وجود داشت، کجاها می‌شد از راه سریع‌تر رفت و کجاها سوال سخت بود و ارزش وقت گذاشتن زیاد رو نداشت. بانک اشتباهاتت رو با این نکات کامل کن. تو در مسیر درستی هستی. ادامه بده قهرمان! ✨"
        }
    }
});