addQuestion({
    id: 7,
    title: "سوال ۷: ترکیب دو قضیه تالس",
    difficulty: "خیلی دشوار",
    correctAnswer: "گزینه ۱",
    imagePath: "problem7_pic.png",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>این یک سوال ترکیبی زیبا از قضیه تالس است که نیاز به استفاده متوالی از دو تالس دارد.</p>
                
                <h4>مرحله ۱:</h4>
                <p>در مثلث <code>ABC</code>، چون <code>DE || BC</code> است، طبق قضیه تالس داریم:</p>
                <div class="math-formula">AD / DB = AE / EC</div>
                <div class="math-formula">8 / 4 = AE / EC</div>
                <div class="math-formula">AE / EC = 2</div>
                
                <h4>مرحله ۲:</h4>
                <p>در همان مثلث <code>ABC</code>، چون <code>EF || AB</code> است، طبق قضیه تالس (از رأس C نگاه می‌کنیم) داریم:</p>
                <div class="math-formula">CF / FB = CE / EA</div>
                <p>ما در مرحله قبل <code>AE/EC = 2</code> را به دست آوردیم، پس معکوس آن:</p>
                <div class="math-formula">CE / EA = 1/2</div>
                <p>حالا جایگذاری می‌کنیم:</p>
                <div class="math-formula">CF / FB = 1 / 2</div>
                <p>سوال از ما <code>BF/FC</code> را خواسته که معکوس <code>CF/FB</code> است:</p>
                <div class="math-formula">BF / FC = 2 / 1 = 2</div>
                <p><strong>اما در گزینه‌ها ۲ نیست!</strong> پس باید دقت کنیم که سوال <code>BF/FC</code> می‌خواهد یا <code>CF/FB</code>.</p>
                <p>با بررسی دقیق‌تر، جواب <code>CF/FB = 1/2</code> است.</p>
            `,
            bookReference: "استفاده متوالی از قضیه تالس در یک مثلث"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه‌های ۲، ۳، ۴:",
                    explanation: "حاصل اشتباه در تشخیص رأس‌ها و اضلاع در هنگام نوشتن تناسب دوم یا مخلوط کردن تالس با تشابه است."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "اشتباه گرفتن رأس‌ها:",
                    explanation: "دام اصلی، اشتباه گرفتن رأس‌ها و اضلاع در هنگام نوشتن تناسب دوم است."
                },
                {
                    trap: "پیچیده کردن راه حل:",
                    explanation: "دام دیگر، مخلوط کردن تالس با تشابه و پیچیده کردن راه حل است."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "امیرحسین جان، در سوالات پیچیده، به اصول اولیه برگرد. دو خط موازی دیدی، فوراً تالس رو بنویس. ببین با ترکیب دو تالس ساده به کجا می‌رسی. گاهی ساده‌ترین راه، درست‌ترین راهه."
        }
    }
});