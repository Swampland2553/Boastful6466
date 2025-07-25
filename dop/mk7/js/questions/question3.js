addQuestion({
    id: 3,
    title: "سوال ۳: تشابه در شکل پروانه‌ای",
    difficulty: "متوسط",
    correctAnswer: "گزینه ۲",
    imagePath: "problem3_pic.png",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>چون <code>AB || CD</code> است، دو مثلث <code>OAB</code> و <code>OCD</code> با هم متشابه هستند. چرا؟</p>
                <ul>
                    <li><code>∠AOB = ∠COD</code> (زوایای متقابل به رأس)</li>
                    <li><code>∠OAB = ∠OCD</code> (زوایای متبادل داخلی، چون AB || CD و مورب AC)</li>
                    <li><code>∠OBA = ∠ODC</code> (زوایای متبادل داخلی، چون AB || CD و مورب BD)</li>
                </ul>
                <p>پس دو مثلث به حالت (ز ز ز) متشابه هستند. حالا نسبت اضلاع متناظر را می‌نویسیم:</p>
                <div class="math-formula">OA / OC = OB / OD = AB / CD</div>
                <div class="math-formula">4 / 6 = 8 / CD</div>
                <p>کسر 4/6 را به 2/3 ساده می‌کنیم:</p>
                <div class="math-formula">2 / 3 = 8 / CD</div>
                <div class="math-formula">2 × CD = 3 × 8 = 24</div>
                <div class="math-formula">CD = 24 / 2 = 12</div>
            `,
            bookReference: "کاربرد مستقیم تشابه مثلث‌ها"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه ۱ (۱۰):",
                    explanation: "اگر به اشتباه OA/OD را 4/5 در نظر بگیرید."
                },
                {
                    option: "گزینه ۳ (۱۴) و ۴ (۱۶):",
                    explanation: "حاصل اشتباه در تناسب‌بندی است."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "اشتباه در تشخیص اضلاع متناظر:",
                    explanation: "دانش‌آموز ممکن است به اشتباه بنویسد OA / OD = AB / CD. باید دقت کرد که رأس‌های متناظر درست مقابل هم قرار بگیرند (A با C و B با D)."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "شکل \"پروانه‌ای\" رو به خاطر بسپار. هر وقت دو خط موازی و دو خط متقاطع دیدی، فوراً دنبال دو مثلث متشابه بگرد. کلید حل، نوشتن درست نسبت اضلاع متناظر است."
        }
    }
});