// Study schedule data
const studySchedule = {
    "دوشنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "شیمی 🧪",
                content: {
                    topic: "فصل اول شیمی، \"قدر هدایای زمینی را بدانیم\"",
                    tasks: [
                        "۱ ساعت: دیدن فیلم تدریس یا مطالعه دقیق کتاب (ساختار اتم، جدول تناوبی)",
                        "۱ ساعت: تمرکز روی معنی و املا واژگان تخصصی و مفهوم غلظت عناصر",
                        "۳۰ دقیقه: حل ۵ تا تمرین/تست از بخش‌های خوانده شده",
                        "خلاصه‌نویسی: نکات مهم فصل ۱ در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "عربی 🗣️",
                content: {
                    topic: "درس اول عربی، \"مترادف و متضاد\" و \"اسم، فعل، حرف\"",
                    tasks: [
                        "۱ ساعت: مرور قواعد پایه اسم، فعل، حرف و مترادف/متضاد",
                        "۳۰ دقیقه: حل ۳ تا ۵ تمرین مترادف و متضاد",
                        "خلاصه‌نویسی: قواعد پایه و لغات در دفترچه کوچیک"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "دینی 📖",
                content: {
                    topic: "درس اول دینی \"هدایت الهی\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن درس اول و تمرکز روی مفاهیم اصلی",
                        "۱۵ دقیقه: خلاصه‌نویسی یک پاراگراف از مفهوم \"هدایت الهی\""
                    ]
                }
            }
        ]
    },
    "سه‌شنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "زیست 🧬",
                content: {
                    topic: "فصل اول زیست، \"تنظیم عصبی\" - گفتار ۱",
                    tasks: [
                        "۱.۵ ساعت: مطالعه ساختار نورون، پتانسیل آرامش و عمل",
                        "۱ ساعت: تمرکز روی مفاهیم و رسم بخش‌های نورون",
                        "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی",
                        "خلاصه‌نویسی: نمودار مراحل انتقال پیام در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "زبان 🇬🇧",
                content: {
                    topic: "درس اول زبان (Unit 1) - لغات و گرامر پایه",
                    tasks: [
                        "۱ ساعت: مرور لغات مهم و گرامر پایه (افعال to be، زمان حال)",
                        "۳۰ دقیقه: نوشتن ۱۰ لغت جدید با جمله و حل ۳-۵ تمرین گرامر",
                        "خلاصه‌نویسی: لغات و نکات گرامری در دفترچه جداگانه"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "فارسی 📝",
                content: {
                    topic: "درس اول فارسی \"ادبیات تعلیمی\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن متن یا شعر و درک مفهوم کلی",
                        "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از مفهوم اصلی"
                    ]
                }
            }
        ]
    },
    "چهارشنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "شیمی 🧪",
                content: {
                    topic: "ادامه فصل اول - \"عناصر در طبیعت\" و \"کاربردهای آهن\"",
                    tasks: [
                        "۱.۵ ساعت: مطالعه استخراج عناصر و کاربردهای آن‌ها",
                        "۱ ساعت: تمرکز روی مفاهیم و کاربردها",
                        "۳۰ دقیقه: حل ۵ تا تمرین/تست از فرآیندهای استخراج",
                        "خلاصه‌نویسی: نکات استخراج و کاربرد عناصر در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "عربی 🗣️",
                content: {
                    topic: "درس اول عربی - \"تشخیص انواع فعل\"",
                    tasks: [
                        "۱ ساعت: مرور قواعد فعل ماضی، مضارع، امر، نهی",
                        "۳۰ دقیقه: حل ۵ تا تمرین تشخیص انواع فعل",
                        "خلاصه‌نویسی: جدول انواع فعل و نشانه‌های هر کدام"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "دینی 📖",
                content: {
                    topic: "درس دوم دینی \"تداوم هدایت\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن درس دوم (علل فرستادن پیامبران، ختم نبوت)",
                        "۱۵ دقیقه: خلاصه‌نویسی یک پاراگراف از \"تداوم هدایت\""
                    ]
                }
            }
        ]
    },
    "پنج‌شنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "زیست 🧬",
                content: {
                    topic: "ادامه فصل اول - گفتار ۲: اجزای دستگاه عصبی",
                    tasks: [
                        "۱.۵ ساعت: مطالعه مغز، نخاع، نورون‌های حسی و حرکتی",
                        "۱ ساعت: تمرکز روی کارکردها و ارتباط بین بخش‌ها",
                        "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی",
                        "خلاصه‌نویسی: نقشه ذهنی اجزای دستگاه عصبی در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "زبان 🇬🇧",
                content: {
                    topic: "درس اول زبان - درک مطلب (Reading Comprehension)",
                    tasks: [
                        "۱ ساعت: خوندن متن‌های کوتاه و پاسخ به سوالات درک مطلب",
                        "۳۰ دقیقه: حل ۳ تا ۵ سوال درک مطلب",
                        "تمرکز روی سرعت و دقت در فهم مطلب"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "فارسی 📝",
                content: {
                    topic: "درس دوم فارسی \"ادبیات پایداری\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن متن یا شعر و درک مفهوم مقاومت",
                        "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از \"ادبیات پایداری\""
                    ]
                }
            }
        ]
    },
    "جمعه": {
        emoji: "🏖️",
        isRestDay: true,
        message: "کامل تعطیله! هیچ درس و کتابی رو باز نکن. این روز برای استراحت مغز و جسم توئه. لذت ببر! 🥳"
    },
    "شنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "شیمی 🧪",
                content: {
                    topic: "ادامه فصل اول - \"چرخه فلز در طبیعت\" و \"بازیافت\"",
                    tasks: [
                        "۱.۵ ساعت: مطالعه چرخه فلزات و بازیافت",
                        "۱ ساعت: تمرکز روی مفاهیم و اهمیت بازیافت",
                        "۳۰ دقیقه: حل ۵ تا تمرین/تست از بازیافت و چرخه‌های طبیعی",
                        "خلاصه‌نویسی: نکات چرخه فلز و بازیافت در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "عربی 🗣️",
                content: {
                    topic: "درس اول عربی - \"جمله‌سازی و ترجمه\"",
                    tasks: [
                        "۱ ساعت: تمرین ترجمه جملات کوتاه از عربی به فارسی",
                        "۳۰ دقیقه: حل ۳ تا ۵ جمله ترجمه از کتاب درسی",
                        "خلاصه‌نویسی: جملات مهم ترجمه شده"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "دینی 📖",
                content: {
                    topic: "درس سوم دینی \"معجزه جاودان\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن درس سوم (معجزه پیامبران، اعجاز قرآن)",
                        "۱۵ دقیقه: خلاصه‌نویسی یک پاراگراف از \"معجزه جاودان\""
                    ]
                }
            }
        ]
    },
    "یکشنبه": {
        emoji: "☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت",
                subject: "زیست 🧬",
                content: {
                    topic: "ادامه فصل اول - گفتار ۳: اختلالات دستگاه عصبی",
                    tasks: [
                        "۱.۵ ساعت: مطالعه اختلالات عصبی و دستگاه عصبی جانوران",
                        "۱ ساعت: تمرکز روی مقایسه‌ها و مثال‌ها",
                        "۳۰ دقیقه: حل ۳ تا ۵ تست آموزشی",
                        "خلاصه‌نویسی: جدول مقایسه دستگاه عصبی جانوران در یک صفحه"
                    ]
                }
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت",
                subject: "زبان 🇬🇧",
                content: {
                    topic: "درس اول زبان - نوشتاری (Writing)",
                    tasks: [
                        "۱ ساعت: تمرین نوشتن پاراگراف کوتاه (معرفی خود، برنامه روزانه)",
                        "۳۰ دقیقه: نوشتن ۱ پاراگراف ۴-۵ خطی در مورد موضوع دلخواه",
                        "خلاصه‌نویسی: نکات کلیدی نوشتاری در دفترچه"
                    ]
                }
            },
            {
                time: "شب (۲۱:۰۰ تا ۲۱:۳۰) - ۳۰ دقیقه",
                subject: "فارسی 📝",
                content: {
                    topic: "درس سوم فارسی \"ادبیات غنایی\"",
                    tasks: [
                        "۱۵ دقیقه: خوندن متن یا شعر و درک مفهوم کلی",
                        "۱۵ دقیقه: نوشتن یک پاراگراف خلاصه از \"ادبیات غنایی\""
                    ]
                }
            }
        ]
    }
};

// Motivational messages
const motivationalMessages = [
    "هستی قهرمان! تو داری عالی پیش میری! 💪",
    "هر قدم کوچیک، یه پیروزی بزرگه! ادامه بده! 🌟",
    "من به تو ایمان دارم! تو می‌تونی! 🚀",
    "قدرت تو بی‌نهایته! فقط ادامه بده! ⭐",
    "تو داری تاریخ می‌سازی! آفرین! 🎉",
    "هر روز بهتر از دیروز! تو فوق‌العاده‌ای! 💎",
    "راه موفقیت رو انتخاب کردی! ادامه بده! 🏆"
];

// DOM elements
const daysContainer = document.getElementById('daysContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const resetBtn = document.getElementById('resetBtn');
const motivationBtn = document.getElementById('motivationBtn');
const motivationModal = document.getElementById('motivationModal');
const closeModal = document.getElementById('closeModal');
const motivationTextEl = document.getElementById('motivationText');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderSchedule();
    updateProgress();
    setupEventListeners();
    registerServiceWorker();
});

function renderSchedule() {
    daysContainer.innerHTML = '';
    
    Object.entries(studySchedule).forEach(([day, data]) => {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.id = `day-${day}`;
        
        if (data.isRestDay) {
            dayCard.innerHTML = `
                <div class="rest-day">
                    <h3>${data.emoji} ${day}</h3>
                    <p>${data.message}</p>
                </div>
            `;
        } else {
            const sessionsHtml = data.sessions.map((session, sessionIndex) => {
                const tasksHtml = session.content.tasks.map((task, taskIndex) => {
                    const taskId = `task-${day}-${sessionIndex}-${taskIndex}`;
                    const isCompleted = localStorage.getItem(taskId) === 'true';
                    
                    return `
                        <div class="task-checkbox ${isCompleted ? 'completed' : ''}" data-task-id="${taskId}">
                            <input type="checkbox" ${isCompleted ? 'checked' : ''}>
                            <span>${task}</span>
                        </div>
                    `;
                }).join('');
                
                return `
                    <div class="session">
                        <div class="session-header">
                            <div class="session-time">${session.time}</div>
                            <div class="session-subject">${session.subject}</div>
                        </div>
                        <div class="session-content">
                            <h4>${session.content.topic}</h4>
                            ${tasksHtml}
                        </div>
                    </div>
                `;
            }).join('');
            
            const completedTasks = getCompletedTasksForDay(day);
            const totalTasks = getTotalTasksForDay(day);
            const dayProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
            
            dayCard.innerHTML = `
                <div class="day-header">
                    <div class="day-title">${data.emoji} ${day}</div>
                    <div class="day-progress">${completedTasks}/${totalTasks} انجام شده (${dayProgress}%)</div>
                </div>
                ${sessionsHtml}
            `;
        }
        
        daysContainer.appendChild(dayCard);
    });
}

function setupEventListeners() {
    // Task checkbox listeners
    daysContainer.addEventListener('click', function(e) {
        if (e.target.closest('.task-checkbox')) {
            const taskElement = e.target.closest('.task-checkbox');
            const taskId = taskElement.dataset.taskId;
            const checkbox = taskElement.querySelector('input[type="checkbox"]');
            
            // Toggle checkbox state
            checkbox.checked = !checkbox.checked;
            
            // Update localStorage
            localStorage.setItem(taskId, checkbox.checked.toString());
            
            // Update UI
            taskElement.classList.toggle('completed', checkbox.checked);
            
            if (checkbox.checked) {
                taskElement.classList.add('celebrate');
                setTimeout(() => taskElement.classList.remove('celebrate'), 500);
            }
            
            // Update progress
            updateProgress();
            renderSchedule(); // Re-render to update day progress
        }
    });
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        if (confirm('آیا مطمئنی که می‌خوای تمام پیشرفت رو ریست کنی؟')) {
            localStorage.clear();
            renderSchedule();
            updateProgress();
        }
    });
    
    // Motivation button
    motivationBtn.addEventListener('click', function() {
        const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
        motivationTextEl.textContent = randomMessage;
        motivationModal.style.display = 'block';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        motivationModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === motivationModal) {
            motivationModal.style.display = 'none';
        }
    });
}

function getCompletedTasksForDay(day) {
    if (studySchedule[day].isRestDay) return 0;
    
    let completed = 0;
    studySchedule[day].sessions.forEach((session, sessionIndex) => {
        session.content.tasks.forEach((task, taskIndex) => {
            const taskId = `task-${day}-${sessionIndex}-${taskIndex}`;
            if (localStorage.getItem(taskId) === 'true') {
                completed++;
            }
        });
    });
    return completed;
}

function getTotalTasksForDay(day) {
    if (studySchedule[day].isRestDay) return 0;
    
    let total = 0;
    studySchedule[day].sessions.forEach(session => {
        total += session.content.tasks.length;
    });
    return total;
}

function updateProgress() {
    let totalCompleted = 0;
    let totalTasks = 0;
    
    Object.keys(studySchedule).forEach(day => {
        totalCompleted += getCompletedTasksForDay(day);
        totalTasks += getTotalTasksForDay(day);
    });
    
    const progressPercentage = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;
    
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `پیشرفت هفته: ${progressPercentage}% (${totalCompleted}/${totalTasks})`;
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    }
}