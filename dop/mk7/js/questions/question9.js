addQuestion({
    id: 9,
    title: "سوال ۹: خط کمکی موازی",
    difficulty: "خیلی دشوار",
    correctAnswer: "گزینه ۳",
    sections: {
        correctAnalysis: {
            title: "راه حل:",
            content: `
                <p>این سوال یک کاربرد بسیار زیبا از قضیه تالس و نیاز به رسم خط کمکی دارد.</p>
                
                <h4>راه حل با خط کمکی:</h4>
                <p>از نقطه <code>D</code>، خطی موازی با <code>BF</code> (یا همان <code>EF</code>) رسم می‌کنیم تا <code>AC</code> را در نقطه <code>G</code> قطع کند.</p>
                
                <p>حالا در مثلث <code>BCF</code>، چون <code>D</code> وسط <code>BC</code> است و <code>DG || BF</code>، طبق قضیه تالس عکس در میانه، <code>G</code> نیز وسط <code>CF</code> خواهد بود. یعنی:</p>
                <div class="math-formula">CG = GF</div>
                
                <p>حالا به مثلث <code>ADG</code> نگاه می‌کنیم. چون <code>E</code> وسط <code>AD</code> است و <code>EF || DG</code>، طبق قضیه تالس، <code>F</code> نیز وسط <code>AG</code> خواهد بود. یعنی:</p>
                <div class="math-formula">AF = FG</div>
                
                <p>از این دو نتیجه داریم:</p>
                <div class="math-formula">AF = FG = GC</div>
                
                <p>پس پاره‌خط <code>AC</code> به سه قسمت مساوی تقسیم شده است.</p>
                <p>فرض کنیم <code>AF = x</code>، آنگاه:</p>
                <div class="math-formula">FC = FG + GC = x + x = 2x</div>
                
                <p>نسبت مورد نظر:</p>
                <div class="math-formula">AF / FC = x / 2x = 1/2</div>
            `,
            bookReference: "حل مسائل پیچیده هندسه با استفاده از خط کمکی موازی"
        },
        wrongOptions: {
            title: "چرا گزینه‌های دیگر غلط هستند؟",
            content: [
                {
                    option: "گزینه‌های ۱، ۲، ۴:",
                    explanation: "حاصل تلاش برای حل سوال بدون خط کمکی که تقریباً غیرممکن است و دانش‌آموز را گیج می‌کند."
                }
            ]
        },
        traps: {
            title: "دام‌ها و تله‌های تستی:",
            content: [
                {
                    trap: "عدم استفاده از خط کمکی:",
                    explanation: "تلاش برای حل سوال بدون خط کمکی تقریباً غیرممکن است و دانش‌آموز را گیج می‌کند. کلید حل، تشخیص نقطه مناسب برای رسم خط موازی است (D)."
                }
            ]
        },
        advice: {
            title: "توصیه‌های مشاور:",
            content: "این تیپ سوالات، مرز بین دانش‌آموزان خوب و رتبه‌های برتر رو مشخص می‌کنه. نترس از اینکه یه خط به شکل اضافه کنی. اگر مسئله با روش‌های مستقیم حل نشد، به فکر رسم \"خط کمکی موازی\" از یکی از نقاط کلیدی مسئله (معمولاً نقاط وسط) باش."
        }
    }
});