addQuestion({
    id: 5,
    title: "سوال ۵: روابط طولی در مثلث قائم‌الزاویه",
    difficulty: "دشوار",
    correctAnswer: "گزینه ۳",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>در مثلث قائم‌الزاویه، ارتفاع وارد بر وتر، آن را به دو مثلث دیگر تقسیم می‌کند که هر سه با هم متشابه هستند (<code>ABC ~ ABH ~ ACH</code>).</p>
                <p>ما از روابط طولی در مثلث قائم‌الزاویه استفاده می‌کنیم که از همین تشابه‌ها به دست آمده‌اند:</p>
                <div class="math-formula">AC² = CH × BC</div>
                <div class="math-formula">AB² = BH × BC</div>
                
                <h4>راه حل اول:</h4>
                <p>ابتدا طول CH را محاسبه می‌کنیم:</p>
                <div class="math-formula">12² = CH × 20</div>
                <div class="math-formula">144 = 20 × CH</div>
                <div class="math-formula">CH = 144 / 20 = 7.2</div>
                <p>حالا برای BH داریم:</p>
                <div class="math-formula">BH = BC - CH = 20 - 7.2 = 12.8</div>
                
                <h4>راه حل دوم (سریع‌تر):</h4>
                <p>ابتدا با استفاده از فیثاغورس در مثلث ABC، طول AB را پیدا می‌کنیم:</p>
                <div class="math-formula">AB² + AC² = BC²</div>
                <div class="math-formula">AB² + 12² = 20²</div>
                <div class="math-formula">AB² + 144 = 400</div>
                <div class="math-formula">AB² = 256 ⟹ AB = 16</div>
                <p>حالا از رابطه طولی دوم استفاده می‌کنیم:</p>
                <div class="math-formula">AB² = BH × BC</div>
                <div class="math-formula">16² = BH × 20</div>
                <div class="math-formula">256 = 20 × BH</div>
                <div class="math-formula">BH = 256 / 20 = 12.8</div>
            `,
            bookReference: "کتاب درسی، صفحه ۴۲، نتیجه - روابط طولی در مثلث قائم‌الزاویه"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه ۱ (۷.۲):",
                    explanation: "این طول CH است، نه BH. طراحان همیشه جواب‌های میانی را در گزینه‌ها قرار می‌دهند."
                },
                {
                    option: "گزینه ۲ (۱۰):",
                    explanation: "اگر وتر نصف شود، که فقط در صورت متساوی‌الساقین بودن مثلث رخ می‌دهد."
                },
                {
                    option: "گزینه ۴ (۱۴.۴):",
                    explanation: "حاصل اشتباه محاسباتی است."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "حفظ نبودن روابط طولی:",
                    explanation: "حفظ نبودن روابط طولی یا جابجا نوشتن آنها."
                },
                {
                    trap: "انتخاب جواب میانی:",
                    explanation: "انتخاب CH = 7.2 به عنوان جواب نهایی (گزینه ۱). طراحان همیشه جواب‌های میانی را در گزینه‌ها قرار می‌دهند."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "روابط طولی در مثلث قائم‌الزاویه (چهار رابطه‌ی اصلی) را باید مثل نام خودت بلد باشی! نوشتن این روابط در ابتدای برگه آزمون می‌تواند به کاهش خطا کمک کند."
        }
    }
});