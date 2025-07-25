addQuestion({
    id: 10,
    title: "سوال ۱۰: ترکیب هندسه تحلیلی و تشابه",
    difficulty: "خیلی دشوار",
    correctAnswer: "گزینه ۳",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>این سوال ترکیبی از هندسه تحلیلی و تشابه است.</p>
                
                <h4>راه حل با تشابه (ساعت شنی):</h4>
                <p>در شکل، چون <code>AD || BC</code> (اضلاع مستطیل)، پس <code>AD || MC</code>.</p>
                <p>در نتیجه، مثلث‌های <code>ADN</code> و <code>CMN</code> با هم متشابه هستند (حالت پروانه‌ای).</p>
                <div class="math-formula">AD / MC = AN / NC = DN / NM</div>
                
                <p>طول <code>AD</code> برابر <code>8</code> است.</p>
                <p>چون <code>M</code> وسط <code>BC</code> است و <code>BC = AD = 8</code>، پس <code>MC = 4</code>.</p>
                
                <p>حالا نسبت تشابه را داریم:</p>
                <div class="math-formula">AD / MC = 8 / 4 = 2</div>
                
                <p>پس:</p>
                <div class="math-formula">AN / NC = 2</div>
                
                <p>این یعنی <code>AN</code> دو برابر <code>NC</code> است: <code>AN = 2 × NC</code>.</p>
                
                <p>کل قطر <code>AC</code> را با فیثاغورس در مثلث <code>ABC</code> پیدا می‌کنیم:</p>
                <div class="math-formula">AC² = AB² + BC² = 6² + 8² = 36 + 64 = 100</div>
                <div class="math-formula">AC = 10</div>
                
                <p>می‌دانیم <code>AC = AN + NC = 10</code>.</p>
                <p>به جای <code>NC</code>، مقدار <code>AN/2</code> را قرار می‌دهیم:</p>
                <div class="math-formula">AN + AN/2 = 10</div>
                <div class="math-formula">(3/2) × AN = 10</div>
                <div class="math-formula">AN = 20 / 3</div>
            `,
            bookReference: "ترکیب تشابه پروانه‌ای با ویژگی‌های مستطیل و قضیه فیثاغورس"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه‌های ۱، ۲، ۴:",
                    explanation: "حاصل اشتباه در تشخیص تشابه بین دو مثلث ADN و CMN، اشتباه در محاسبه طول MC، یا اشتباه در تقسیم عدد ۱۰ به نسبت ۱ به ۲."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "عدم تشخیص تشابه:",
                    explanation: "تشخیص ندادن تشابه بین دو مثلث ADN و CMN."
                },
                {
                    trap: "اشتباه در محاسبه MC:",
                    explanation: "اشتباه در محاسبه طول MC."
                },
                {
                    trap: "اشتباه در تقسیم نسبت:",
                    explanation: "اشتباه در تقسیم عدد ۱۰ به نسبت ۱ به ۲."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "این سوال نشون می‌ده که تو کنکور، مباحث با هم ترکیب می‌شن. اینجا تشابه، خواص مستطیل و فیثاغورس با هم اومدن. همیشه دنبال شکل‌های آشنا (مثل پروانه) بگرد، حتی اگه داخل شکل‌های دیگه‌ای پنهان شده باشن."
        }
    }
});