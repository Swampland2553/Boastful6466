document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  ۱. مرکز داده‌ها (Data Hub)
    //  تمام محتوای مراحل به صورت یک آبجکت جاوااسکریپت ذخیره شده است.
    //  این کار باعث می‌شود کد تمیزتر و مدیریت آن آسان‌تر باشد.
    // =================================================================
    const levelsData = [
        {
            level: 1,
            title: "🕵️ «کارآگاه زمان»",
            subtitle: "فقط بنویس چه کار کردی!",
            mission: "خیلی ساده! از امشب، هر شب قبل از خواب، دفتر برنامه‌ریزیت رو باز کن و فقط بنویس که امروز چه کارهایی انجام دادی و حدوداً چقدر براشون وقت گذاشتی.",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال گزارش یک کارآگاه حرفه‌ای (برای روز شنبه):</strong>
                    <ul>
                        <li><b>بازه صبح:</b> "حدود ۱.۵ ساعت ریاضی خوندم (مبحث احتمال)."</li>
                        <li><b>بازه ظهر:</b> "حدود ۱ ساعت زیست خوندم (فصل ۱)."</li>
                        <li><b>بازه عصر:</b> "حدود ۴۵ دقیقه تست شیمی زدم."</li>
                        <li><b>بازه شب:</b> "تکالیف زبان رو انجام دادم."</li>
                    </ul>
                </div>`,
            whyMagic: "این کار مثل اینه که یک دکتر قبل از تجویز دارو، اول ازت آزمایش می‌گیره. ما با این گزارش‌نویسی، داریم از سبک زندگی و مطالعه‌مون یک <strong>عکس دقیق و بدون فیلتر</strong> می‌گیریم. این عکس به هر دوی ما کمک می‌کنه بفهمیم: <ul><li>⏰ واقعاً چقدر زمان برای مطالعه داریم؟</li><li>⚡️ بیشتر چه وقت‌هایی از روز انرژی و تمرکز داریم؟</li><li>🌀 چه دزدهای زمانی‌ای در کمین ما هستن؟</li></ul>",
            commitment: "🤝 تعهد ما در سطح ۱: فقط و فقط همین! هر شب، گزارش کارهای اون روز رو بنویس. این کار ساده، اولین و مهم‌ترین قدم برای به دست آوردن <strong>قدرت آگاهی</strong> است."
        },
        {
            level: 2,
            title: "🏗️ «معمار روز»",
            subtitle: "از امشب برای فردا بنویس!",
            mission: "از این به بعد، به جای اینکه شب گزارش کارهای انجام‌شده رو بنویسی، <strong>از شب قبل، نقشه و اسکلت کارهایی که فردا می‌خوای انجام بدی رو طراحی می‌کنی.</strong>",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال نقشه یک معمار (برای روز یکشنبه):</strong>
                    <ul>
                        <li><b>پروژه ۱ (یکشنبه):</b> "مطالعه ادبیات (درس ۳)."</li>
                        <li><b>پروژه ۲ (یکشنبه):</b> "حل تمرین‌های فیزیک (فصل ۲)."</li>
                        <li><b>پروژه ۳ (یکشنبه):</b> "مرور خلاصه‌های زیست."</li>
                        <li><b>پروژه ۴ (یکشنبه):</b> "انجام تکالیف عربی."</li>
                    </ul>
                </div>`,
            whyMagic: "این کار مثل اینه که قبل از شروع یک سفر، نقشه رو نگاه کنی. وقتی از شب قبل می‌دونی فردا قراره چه کارهایی انجام بدی: <ul><li>☀️ صبح با هدف مشخص‌تری از خواب بیدار می‌شی.</li><li>🤯 سردرگمی و اتلاف وقت برای اینکه \"حالا چی بخونم؟\" از بین می‌ره.</li><li>💪 به روزت نظم و ساختار می‌دی و <strong>حس کنترل</strong> بیشتری روی زمانت پیدا می‌کنی.</li></ul>",
            commitment: "🤝 تعهد ما در سطح ۲: هر شب، فقط لیست پروژه‌هایی که فردا باید انجام بدی رو بدون هیچ جزئیات اضافه‌ای بنویس."
        },
        {
            level: 3,
            title: "🚦 «فرمانده استراتژیک»",
            subtitle: "اول کارهای مهم‌تر!",
            mission: "از امشب، وقتی داری لیست کارهای فردات رو می‌نویسی، کنار هر کار، یکی از این سه درجه اهمیت رو بذار:<ul><li><span class='level-a'>🔴 A (فوق‌العاده مهم):</span> کارهایی که حتماً و حتماً باید فردا انجام بشن.</li><li><span class='level-b'>🟡 B (مهم):</span> کارهایی که بهتره انجام بشن.</li><li><span class='level-c'>🟢 C (کم اهمیت):</span> کارهایی که اگه وقت اضافه آوردی، انجام میدی.</li></ul>",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال لیست فرمان یک فرمانده (برای روز شنبه):</strong>
                    <table>
                        <tr><th>شنبه</th></tr>
                        <tr><td>✅ ۱. [<span class='level-a'>A</span>] مطالعه زیست فصل ۳ از دهم</td></tr>
                        <tr><td>✅ ۲. [<span class='level-a'>A</span>] حل تمرین‌های مشتق ریاضی</td></tr>
                        <tr><td>❌ ۳. [<span class='level-b'>B</span>] مرور لغات زبان درس ۲</td></tr>
                        <tr><td>❌ ۴. [<span class='level-c'>C</span>] تمیز کردن اتاق</td></tr>
                    </table>
                </div>`,
            whyMagic: "این مهارت، فرق بین یک فرد معمولی و یک فرد فوق‌العاده موفقه. وقتی اولویت‌بندی می‌کنی: <ul><li>🧠 <strong>انرژی و تمرکزت رو روی مهم‌ترین کارها می‌ذاری.</strong></li><li>🧘 <strong>از استرس \"به همه کارام نمی‌رسم\" خلاص می‌شی.</strong></li><li>🎯 <strong>تصمیم‌گیری هوشمندانه‌تری داری.</strong></li></ul>",
            commitment: "🤝 تعهد ما در سطح ۳: هر شب، کارهات رو اولویت‌بندی کن و قسم بخور که همیشه اول به سراغ <strong>سربازان خط مقدم (گروه A)</strong> بری."
        },
        {
            level: 4,
            title: "⏰ «تک‌تیرانداز زمان»",
            subtitle: "هر کاری در زمان خودش!",
            mission: "حالا علاوه بر اولویت‌بندی، برای کارهای گروه A و B، یک <strong>بازه زمانی مشخص</strong> در جدول زمان‌بندی بالای صفحه در نظر می‌گیری.",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال نقشه شلیک یک تک‌تیرانداز (برای روز جمعه):</strong>
                    <p><b>لیست اهداف:</b></p>
                    <ul>
                        <li>[<span class='level-a'>A</span>] مطالعه زیست فصل ۳</li>
                        <li>[<span class='level-a'>A</span>] حل تمرین ریاضی (احتمال + مشتق)</li>
                        <li>[<span class='level-b'>B</span>] مرور عربی یازدهم</li>
                    </ul>
                    <p><b>زمان‌بندی شلیک:</b></p>
                    <ul>
                        <li><b>بازه ۹:۰۰ تا ۱۰:۳۰:</b> 🎯 شلیک به هدف زیست</li>
                        <li><b>بازه ۱۰:۴۵ تا ۱۲:۱۵:</b> 🎯 شلیک به هدف ریاضی</li>
                        <li><b>بازه ۱۶:۰۰ تا ۱۷:۳۰:</b> 🎯 شلیک به هدف عربی</li>
                    </ul>
                </div>`,
            whyMagic: "این کار، برنامه تو رو از یک \"لیست آرزوها\" به یک \"نقشه عملیاتی دقیق\" تبدیل می‌کنه. وقتی زمان‌بندی می‌کنی: <ul><li>⛓️ <strong>یک تعهد جدی برای خودت ایجاد می‌کنی.</strong></li><li>🐌 <strong>از اهمال‌کاری جلوگیری می‌کنی.</strong></li><li>👓 <strong>دید واقع‌بینانه‌تری نسبت به زمان پیدا می‌کنی.</strong></li></ul>",
            commitment: "🤝 تعهد ما در سطح ۴: برای اهداف مهمت، بازه‌های زمانی مشخصی رو در جدول بالای صفحه مشخص کن و با تمام وجود به اون پایبند باش."
        },
        {
            level: 5,
            title: "🦅 «ژنرال هفته»",
            subtitle: "نگاه از بالا به کل هفته!",
            mission: "از این به بعد، <strong>عصر جمعه یا صبح شنبه</strong>، چند دقیقه وقت می‌ذاری و مثل یک ژنرال که روی نقشه خم شده، برای کل هفته آینده یک برنامه‌ریزی کلی انجام می‌دی.",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال نقشه جنگ یک ژنرال (برای یک هفته کامل):</strong>
                    <ul>
                        <li><b>شنبه:</b> صبح: حمله به قلعه زیست | عصر: پشتیبانی شیمی</li>
                        <li><b>یکشنبه:</b> صبح: پیشروی در خاک فیزیک | عصر: تثبیت مواضع ریاضی</li>
                        <li><b>سه‌شنبه:</b> صبح: فتح درس ادبیات | عصر: پاکسازی تمرینات عربی</li>
                        <li>و به همین ترتیب برای تمام روزهای هفته...</li>
                    </ul>
                </div>`,
            whyMagic: "وقتی به کل هفته نگاه می‌کنی: <ul><li>⚖️ <strong>تعادل رو بین جبهه‌های مختلف (درس‌ها) برقرار می‌کنی.</strong></li><li>🛡️ <strong>برای حملات غافلگیرکننده آماده می‌شی.</strong></li><li>😌 <strong>استرس روزانه‌ات کمتر می‌شه.</strong></li></ul>",
            commitment: "🤝 تعهد ما در سطح ۵: در ابتدای هر هفته، یک نقشه کلی برای تمام روزهای هفته طراحی کن. این نقشه، فرمان جنگ تو برای ۷ روز آینده است."
        },
        {
            level: 6,
            title: "🏆 «قهرمان پروژه»",
            subtitle: "فراتر از درس، نگاه به جام قهرمانی!",
            mission: "وقتی داری برنامه هفتگی رو می‌چینی، به جای اینکه فقط بنویسی \"مطالعه زیست\"، <strong>نام جام و پروژه</strong> اون بازه زمانی رو مشخص می‌کنی.",
            exampleHTML: `
                <div class="example-section">
                    <strong>📝 مثال لیست پروژه‌های یک قهرمان:</strong>
                    <ul>
                        <li><b>شنبه:</b> 🏆 <b>پروژه زیست:</b> "اتمام گفتار ۱ فصل ۳ + تست‌های آموزشی"</li>
                        <li><b>سه‌شنبه:</b> 🏆 <b>پروژه فیزیک:</b> "مرور فصل ۲ + آمادگی برای کوییز چهارشنبه"</li>
                        <li><b>چهارشنبه:</b> 🏆 <b>پروژه ریاضی:</b> "جمع‌بندی مبحث مثلثات برای آزمون جمعه"</li>
                    </ul>
                </div>`,
            whyMagic: "این سطح، ذهن تو رو از حالت \"انجام وظیفه\" به حالت <strong>\"رسیدن به هدف و کسب افتخار\"</strong> تغییر می‌ده. وقتی پروژه محور فکر می‌کنی: <ul><li>🎯 <strong>مطالعه‌ات هدفمند و معنادار می‌شه.</strong></li><li>📈 <strong>پیشرفتت رو به صورت واقعی و ملموس می‌بینی.</strong></li><li>🥇 <strong>برای مسابقات بزرگ (آزمون‌ها و امتحانات) خیلی آماده‌تر می‌شی.</strong></li></ul>",
            commitment: "🤝 تعهد ما در سطح ۶: در برنامه هفتگی خودت، برای هر بازه مطالعاتی، یک پروژه و یک جام قهرمانی مشخص تعریف کن."
        }
    ];

    // =================================================================
    //  ۲. انتخابگرهای DOM (DOM Selectors)
    //  المان‌های HTML که با آنها کار داریم را یکجا تعریف می‌کنیم.
    // =================================================================
    const roadmapNav = document.getElementById('roadmap-nav');
    const contentDisplay = document.getElementById('level-content-display');
    const progressBar = document.getElementById('progress-bar');
    const confettiCanvas = document.getElementById('confetti-canvas');

    // =================================================================
    //  ۳. توابع اصلی (Core Functions)
    // =================================================================

    /**
     * نمایش محتوای یک مرحله مشخص
     * @param {number} levelIndex - ایندکس مرحله در آرایه levelsData
     */
    function displayLevel(levelIndex) {
        const level = levelsData[levelIndex];
        if (!level) return;

        // ساخت HTML محتوا به صورت پویا
        const contentHTML = `
            <div class="content-card" data-level="${level.level}">
                <h2 id="level-title">${level.title}</h2>
                <p class="subtitle">${level.subtitle}</p>
                
                <h3>🎯 مأموریت شما:</h3>
                <p>${level.mission}</p>
                
                ${level.exampleHTML}
                
                <h3>✨ چرا این مأموریت جادوییه؟</h3>
                <p>${level.whyMagic}</p>
                
                <div class="commitment">${level.commitment}</div>
            </div>
        `;
        
        contentDisplay.innerHTML = contentHTML;

        // افکت تایپ برای عنوان
        const titleElement = document.getElementById('level-title');
        const originalTitle = level.title;
        titleElement.textContent = '';
        typewriterEffect(titleElement, originalTitle, 50);

        // آپدیت کردن کلاس active برای دکمه‌ها
        updateActiveButton(levelIndex);

        // آپدیت کردن نوار پیشرفت
        updateProgressBar(levelIndex);
        
        // اگر مرحله آخر بود، جشن بگیر!
        if (levelIndex === levelsData.length - 1) {
            launchConfetti();
        }
    }

    /**
     * افکت تایپ کردن متن
     * @param {HTMLElement} element - المانی که متن در آن تایپ می‌شود.
     * @param {string} text - متنی که باید تایپ شود.
     * @param {number} speed - سرعت تایپ (میلی‌ثانیه).
     */
    function typewriterEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    /**
     * آپدیت کردن دکمه فعال در نویگیشن
     * @param {number} activeIndex - ایندکس دکمه فعال
     */
    function updateActiveButton(activeIndex) {
        const buttons = roadmapNav.querySelectorAll('.level-button');
        buttons.forEach((button, index) => {
            if (index === activeIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    /**
     * آپدیت کردن نوار پیشرفت
     * @param {number} levelIndex - ایندکس مرحله فعلی
     */
    function updateProgressBar(levelIndex) {
        const progressPercentage = ((levelIndex + 1) / levelsData.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    /**
     * تابع اصلی برای راه‌اندازی برنامه
     */
    function initializeApp() {
        // ساخت دکمه‌های نویگیشن به صورت پویا
        levelsData.forEach((level, index) => {
            const button = document.createElement('button');
            button.className = 'level-button';
            button.textContent = `سطح ${level.level}: ${level.title.split('«')[1].split('»')[0]}`;
            button.dataset.levelIndex = index;

            button.addEventListener('click', () => {
                displayLevel(index);
            });

            roadmapNav.appendChild(button);
        });

        // نمایش مرحله اول به صورت پیش‌فرض
        displayLevel(0);
    }
    
    // =================================================================
    //  ۴. بخش انیمیشن جشن (Confetti Animation)
    //  یک بخش فان برای زیباتر شدن کار
    // =================================================================
    const ctx = confettiCanvas.getContext('2d');
    let confettiParticles = [];

    function launchConfetti() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        confettiParticles = [];
        for (let i = 0; i < 150; i++) {
            confettiParticles.push(createParticle());
        }
        animateConfetti();
    }

    function createParticle() {
        const x = Math.random() * confettiCanvas.width;
        const y = Math.random() * confettiCanvas.height - confettiCanvas.height;
        const size = Math.random() * 10 + 5;
        const color = `hsl(${Math.random() * 360}, 90%, 70%)`;
        const speedX = Math.random() * 6 - 3;
        const speedY = Math.random() * 5 + 2;
        return { x, y, size, color, speedX, speedY };
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        let activeParticles = [];
        confettiParticles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            if(p.y < confettiCanvas.height) {
                activeParticles.push(p);
            }
        });
        confettiParticles = activeParticles;
        if (confettiParticles.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
             ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }


    // =================================================================
    //  ۵. اجرای برنامه (App Execution)
    // =================================================================
    initializeApp();

});