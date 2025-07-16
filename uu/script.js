// Study schedule data structure
const studySchedule = {
    monday: {
        title: "دوشنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "شیمی 🧪 (پایه‌های کنکور)",
                topic: "فصل اول شیمی، \"قدر هدایای زمینی را بدانیم\"",
                details: [
                    "۱ ساعت: دیدن فیلم تدریس استاد یا مطالعه دقیق کتاب (ساختار اتم، جدول تناوبی و روندهای تناوبی)",
                    "۱ ساعت: تمرکز روی معنی و املا واژگان تخصصی و مفهوم غلظت عناصر",
                    "۳۰ دقیقه: حل ۵ تا تمرین/تست از بخش‌هایی که خوندی"
                ],
                summary: "خلاصه‌نویسی نکات مهم فصل ۱ در یک صفحه"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "عربی 🗣️ (مهارت‌محور)",
                topic: "درس اول عربی، \"مترادف و متضاد\" و \"اسم، فعل، حرف\"",
                details: [
                    "۱ ساعت: مرور قواعد پایه اسم، فعل، حرف و تمرکز روی شناخت مترادف و متضاد",
                    "۳۰ دقیقه: حل ۳ تا ۵ تمرین مربوط به مترادف و متضاد و تشخیص اسم، فعل، حرف"
                ],
                summary: "یادداشت قواعد پایه و لغات مترادف/متضاد در دفترچه کوچیک"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "دینی 📖 (خواندنی‌ها)",
                topic: "درس اول دینی \"هدایت الهی\"",
                details: [
                    "۱۵ دقیقه: خوندن درس اول و تمرکز روی مفاهیم اصلی (نیازهای انسان، نیاز برتر)",
                    "۱۵ دقیقه: خلاصه‌نویسی فقط یک پاراگراف از مفهوم اصلی \"هدایت الهی\""
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    },
    tuesday: {
        title: "سه‌شنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست 🧬 (پایه‌های کنکور)",
                topic: "فصل اول زیست، \"تنظیم عصبی\" (گفتار ۱: ساختار یاخته عصبی)",
                details: [
                    "۱.۵ ساعت: دیدن فیلم تدریس یا مطالعه دقیق کتاب روی ساختار نورون، پتانسیل آرامش، پتانسیل عمل",
                    "۱ ساعت: تمرکز روی مفاهیم و الگوها، رسم و نام‌گذاری بخش‌های اصلی نورون",
                    "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی از همین مبحث"
                ],
                summary: "خلاصه نکات کلیدی گفتار ۱ و مراحل انتقال پیام به صورت نمودار یا فلوچارت"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "زبان 🇬🇧 (مهارت‌محور)",
                topic: "درس اول زبان (Unit 1)، \"لغات\" و \"گرامر پایه\"",
                details: [
                    "۱ ساعت: مرور لغات مهم درس اول و گرامر پایه‌ای (افعال to be، زمان حال ساده)",
                    "۳۰ دقیقه: نوشتن ۱۰ لغت جدید با معنی و یک جمله ساده، حل ۳ تا ۵ تمرین گرامر"
                ],
                summary: "یادداشت لغات جدید و نکات گرامری در دفترچه جداگانه"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "فارسی 📝 (خواندنی‌ها)",
                topic: "درس اول فارسی \"ادبیات تعلیمی\"",
                details: [
                    "۱۵ دقیقه: خوندن یک متن کوتاه یا شعر از درس اول و تلاش برای درک مفهوم کلی",
                    "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از مفهوم اصلی ادبیات تعلیمی یا پیام اصلی شعر/متن"
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    },
    wednesday: {
        title: "چهارشنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "شیمی 🧪 (پایه‌های کنکور)",
                topic: "ادامه فصل اول شیمی، \"عناصر در طبیعت\" و \"کاربردهای آهن\"",
                details: [
                    "۱.۵ ساعت: مطالعه دقیق کتاب و دیدن فیلم در مورد استخراج عناصر (مثل آهن) و کاربردهای آن‌ها",
                    "۱ ساعت: تمرکز روی مفاهیم و کاربردها",
                    "۳۰ دقیقه: حل ۵ تا تمرین/تست از بخش‌هایی که خوندی"
                ],
                summary: "خلاصه نکات اصلی مربوط به استخراج و کاربرد عناصر مهم در یک صفحه"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "عربی 🗣️ (مهارت‌محور)",
                topic: "درس اول عربی، \"تشخیص انواع فعل\"",
                details: [
                    "۱ ساعت: مرور قواعد مربوط به شناخت فعل ماضی، مضارع، امر، نهی",
                    "۳۰ دقیقه: حل ۵ تا تمرین تشخیص انواع فعل از روی جملات کتاب درسی"
                ],
                summary: "رسم جدول انواع فعل و نشانه‌های هر کدوم"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "دینی 📖 (خواندنی‌ها)",
                topic: "درس دوم دینی \"تداوم هدایت\"",
                details: [
                    "۱۵ دقیقه: خوندن درس دوم و تمرکز روی مفاهیم (علل فرستادن پیامبران متعدد، ختم نبوت)",
                    "۱۵ دقیقه: خلاصه‌نویسی فقط یک پاراگراف از مفهوم \"تداوم هدایت\""
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    },
    thursday: {
        title: "پنج‌شنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست 🧬 (پایه‌های کنکور)",
                topic: "ادامه فصل اول زیست، \"تنظیم عصبی\" (گفتار ۲: اجزای دستگاه عصبی)",
                details: [
                    "۱.۵ ساعت: دیدن فیلم تدریس یا مطالعه دقیق کتاب روی مغز، نخاع، نورون‌های حسی، حرکتی و رابط",
                    "۱ ساعت: تمرکز روی کارکردها و ارتباط بین بخش‌ها",
                    "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی از همین مبحث"
                ],
                summary: "رسم نقشه‌ی ذهنی (Mind Map) از اجزای دستگاه عصبی و کارکرد هر بخش در یک صفحه"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "زبان 🇬🇧 (مهارت‌محور)",
                topic: "درس اول زبان (Unit 1)، \"درک مطلب\" (Reading Comprehension)",
                details: [
                    "۱ ساعت: خوندن متن‌های کوتاه و تلاش برای پاسخ به سوالات درک مطلب",
                    "۳۰ دقیقه: حل ۳ تا ۵ سوال درک مطلب از متن‌های کوتاه"
                ],
                summary: "تمرکز روی سرعت و دقت در فهم مطلب (بدون نیاز به خلاصه‌نویسی)"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "فارسی 📝 (خواندنی‌ها)",
                topic: "درس دوم فارسی \"ادبیات پایداری\"",
                details: [
                    "۱۵ دقیقه: خوندن یک متن کوتاه یا شعر از درس دوم و تلاش برای درک مفهوم کلی",
                    "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از مفهوم اصلی \"ادبیات پایداری\""
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    },
    friday: {
        title: "جمعه 🏖️",
        timeBlocks: [
            {
                time: "کامل تعطیله! 🥳",
                subject: "استراحت کامل",
                topic: "روز آزاد برای استراحت",
                details: [
                    "هیچ درس و کتابی رو باز نکن",
                    "این روز برای استراحت مغز و جسم توئه",
                    "لذت ببر و انرژی جمع کن!"
                ],
                summary: "فقط استراحت و تفریح"
            }
        ]
    },
    saturday: {
        title: "شنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "شیمی 🧪 (پایه‌های کنکور)",
                topic: "ادامه فصل اول شیمی، \"چرخه فلز در طبیعت\" و \"اهمیت بازیافت\"",
                details: [
                    "۱.۵ ساعت: مطالعه دقیق کتاب و دیدن فیلم در مورد چرخه فلزات و بازیافت",
                    "۱ ساعت: تمرکز روی مفاهیم و اهمیت",
                    "۳۰ دقیقه: حل ۵ تا تمرین/تست از بخش‌هایی که خوندی"
                ],
                summary: "خلاصه نکات مهم چرخه فلز و بازیافت در یک صفحه"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "عربی 🗣️ (مهارت‌محور)",
                topic: "درس اول عربی، \"جمله‌سازی و ترجمه\"",
                details: [
                    "۱ ساعت: تمرین ترجمه جملات کوتاه از عربی به فارسی",
                    "۳۰ دقیقه: حل ۳ تا ۵ جمله ترجمه از کتاب درسی"
                ],
                summary: "یادداشت جملات مهمی که ترجمه کردی"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "دینی 📖 (خواندنی‌ها)",
                topic: "درس سوم دینی \"معجزه جاودان\"",
                details: [
                    "۱۵ دقیقه: خوندن درس سوم و تمرکز روی مفاهیم (معجزه پیامبران، اعجاز قرآن)",
                    "۱۵ دقیقه: خلاصه‌نویسی فقط یک پاراگراف از مفهوم \"معجزه جاودان\""
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    },
    sunday: {
        title: "یکشنبه ☀️",
        timeBlocks: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست 🧬 (پایه‌های کنکور)",
                topic: "ادامه فصل اول زیست، \"تنظیم عصبی\" (گفتار ۳: اختلالات دستگاه عصبی)",
                details: [
                    "۱.۵ ساعت: دیدن فیلم تدریس یا مطالعه دقیق کتاب روی اختلالات عصبی و انواع دستگاه عصبی در جانوران",
                    "۱ ساعت: تمرکز روی مقایسه‌ها و مثال‌ها",
                    "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی از همین مبحث"
                ],
                summary: "رسم جدول مقایسه‌ای از انواع دستگاه عصبی در جانوران در حد یک صفحه"
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "زبان 🇬🇧 (مهارت‌محور)",
                topic: "درس اول زبان (Unit 1)، \"نوشتاری\" (Writing)",
                details: [
                    "۱ ساعت: تمرین نوشتاری‌های کوتاه مثل نوشتن یک پاراگراف کوتاه در مورد یک موضوع ساده",
                    "۳۰ دقیقه: نوشتن ۱ پاراگراف ۴-۵ خطی در مورد موضوعی که دوست داری"
                ],
                summary: "یادداشت نکات کلیدی نوشتاری مثل استفاده از جملات ساده و صحیح"
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه ⏳",
                subject: "فارسی 📝 (خواندنی‌ها)",
                topic: "درس سوم فارسی \"ادبیات غنایی\"",
                details: [
                    "۱۵ دقیقه: خوندن یک متن کوتاه یا شعر از درس سوم و تلاش برای درک مفهوم کلی",
                    "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از مفهوم اصلی \"ادبیات غنایی\""
                ],
                summary: "مرور سریع خلاصه‌ی نوشته شده"
            }
        ]
    }
};

// DOM elements
const navButtons = document.querySelectorAll('.nav-btn');
const contentArea = document.querySelector('.content');
const loadingIndicator = document.getElementById('loading');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            switchToDay(day);
        });
    });
    
    // Show intro by default
    showIntro();
});

// Function to switch between days
function switchToDay(day) {
    // Update active button
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-day="${day}"]`).classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.day-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (day === 'intro') {
        showIntro();
    } else {
        showDay(day);
    }
}

// Function to show introduction
function showIntro() {
    document.getElementById('intro').classList.add('active');
    loadingIndicator.classList.add('hidden');
}

// Function to show a specific day
function showDay(day) {
    // Show loading
    loadingIndicator.classList.remove('hidden');
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const dayData = studySchedule[day];
        
        if (dayData) {
            // Remove existing day content
            const existingDayContent = document.querySelector('.day-content');
            if (existingDayContent) {
                existingDayContent.remove();
            }
            
            // Create day content
            const dayContent = createDayContent(dayData);
            contentArea.appendChild(dayContent);
            
            // Hide loading
            loadingIndicator.classList.add('hidden');
            
            // Show the new content
            dayContent.classList.add('active');
        }
    }, 500);
}

// Function to create day content HTML
function createDayContent(dayData) {
    const daySection = document.createElement('section');
    daySection.className = 'day-section day-content';
    
    let html = `<h2 class="day-title">${dayData.title}</h2>`;
    
    dayData.timeBlocks.forEach(block => {
        html += `
            <div class="time-block">
                <div class="time-header">
                    ${block.time}: ${block.subject}
                </div>
                <div class="time-content">
                    <div class="subject-block">
                        <div class="subject-title">📚 مبحث: ${block.topic}</div>
                        <div class="subject-details">
                            <ul>
                                ${block.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                        ${block.summary ? `<div class="summary-note">📝 ${block.summary}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    daySection.innerHTML = html;
    return daySection;
}

// Add some interactive features
document.addEventListener('click', function(e) {
    // Add click animation to buttons
    if (e.target.classList.contains('nav-btn')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    const currentActive = document.querySelector('.nav-btn.active');
    const allButtons = Array.from(navButtons);
    const currentIndex = allButtons.indexOf(currentActive);
    
    if (e.key === 'ArrowRight' && currentIndex > 0) {
        allButtons[currentIndex - 1].click();
    } else if (e.key === 'ArrowLeft' && currentIndex < allButtons.length - 1) {
        allButtons[currentIndex + 1].click();
    }
});

// Add progress tracking (simple localStorage implementation)
function markTaskComplete(day, taskIndex) {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '{}');
    if (!completedTasks[day]) {
        completedTasks[day] = [];
    }
    if (!completedTasks[day].includes(taskIndex)) {
        completedTasks[day].push(taskIndex);
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    }
}

function isTaskComplete(day, taskIndex) {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks') || '{}');
    return completedTasks[day] && completedTasks[day].includes(taskIndex);
}

// Add motivational messages
const motivationalMessages = [
    "عالی! یک قدم دیگه به موفقیت نزدیک شدی! 🎉",
    "آفرین هستی! داری خیلی خوب پیش میری! 👏",
    "همین طور ادامه بده! تو قهرمانی! 🏆",
    "فوق‌العاده! هر روز بهتر از دیروز میشی! ⭐",
    "برو بالا هستی! من بهت افتخار می‌کنم! 🚀"
];

function showMotivationalMessage() {
    const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
    
    // Create and show notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00b894, #00cec9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-family: 'Vazirmatn', Arial, sans-serif;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = randomMessage;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Show motivational message every 5 minutes
setInterval(showMotivationalMessage, 300000);