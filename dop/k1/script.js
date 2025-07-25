// Simple schedule data
const scheduleData = {
    monday: {
        title: "دوشنبه ☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست‌شناسی 🧬 (اولویت بالا)",
                topic: "فصل اول تنظیم عصبی",
                activities: [
                    "۱ ساعت: مرور سریع خلاصه‌های گفتار ۱ و ۲",
                    "۱.۵ ساعت: حل ۱۰ تا ۱۵ تست ترکیبی",
                    "۳۰ دقیقه: بررسی اشتباهات و خلاصه‌نویسی"
                ]
            }
        ]
    },
    tuesday: {
        title: "سه‌شنبه ☀️ (روز کانون زبان)",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۰۰) - ۲.۵ ساعت ⏳",
                subject: "دینی 📖 (اولویت بالا)",
                topic: "درس‌های اول و دوم دینی",
                activities: [
                    "۱ ساعت: مرور عمیق مفاهیم درس‌های ۱ و ۲",
                    "۱ ساعت: حل سوالات تشریحی و جای خالی",
                    "۳۰ دقیقه: خلاصه‌نویسی کلیدی"
                ]
            }
        ]
    },
    wednesday: {
        title: "چهارشنبه ☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "شیمی 🧪 (پایه‌های کنکور)",
                topic: "فصل اول شیمی، واکنش‌پذیری فلزها و نافلزها",
                activities: [
                    "۱.۵ ساعت: مطالعه دقیق کتاب و دیدن فیلم",
                    "۱ ساعت: تمرکز روی مفاهیم و الگوها",
                    "۳۰ دقیقه: حل ۵ تا ۷ تمرین/تست"
                ]
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "فارسی 📝 (خواندنی‌ها)",
                topic: "درس اول و دوم فارسی ادبیات تعلیمی و پایداری",
                activities: [
                    "۱ ساعت: مرور خلاصه‌های قبلی و خواندن متن جدید",
                    "۳۰ دقیقه: پاسخ به ۳ تا ۵ سوال تشریحی"
                ]
            }
        ]
    },
    thursday: {
        title: "پنج‌شنبه ☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست‌شناسی 🧬 (اولویت بالا)",
                topic: "فصل هفتم تولید مثل - بخش اول",
                activities: [
                    "۱.۵ ساعت: مطالعه دستگاه تولید مثل مرد و زن",
                    "۱ ساعت: تمرکز روی ساختارها و نام‌گذاری‌ها",
                    "۳۰ دقیقه: حل ۵ تا ۷ تست آموزشی"
                ]
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "عربی 🗣️ (مهارت‌محور)",
                topic: "درس اول عربی اسم مکان و اعداد",
                activities: [
                    "۱ ساعت: مرور قواعد مربوط به اسم مکان و اعداد",
                    "۳۰ دقیقه: حل ۳ تا ۵ تمرین"
                ]
            }
        ]
    },
    friday: {
        title: "جمعه 🏖️",
        special: true,
        message: "کامل تعطیله! هیچ درس و کتابی رو باز نکن. این روز برای استراحت مغز و جسم توئه. لذت ببر! 🥳"
    },
    saturday: {
        title: "شنبه ☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "شیمی 🧪 (پایه‌های کنکور)",
                topic: "فصل اول شیمی - حل تست جامع",
                activities: [
                    "۱.۵ ساعت: حل ۱۵ تا ۲۰ تست جامع از کل فصل اول",
                    "۱ ساعت: تحلیل تست‌ها و بررسی اشتباهات",
                    "۳۰ دقیقه: خلاصه‌نویسی نکات مهم"
                ]
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "زبان 🇬🇧 (مهارت‌محور)",
                topic: "درس اول زبان - درک مطلب",
                activities: [
                    "۱ ساعت: خواندن متن‌های بیشتر",
                    "۳۰ دقیقه: حل ۵ تا ۷ سوال درک مطلب"
                ]
            }
        ]
    },
    sunday: {
        title: "یکشنبه ☀️",
        sessions: [
            {
                time: "صبح (۸:۳۰ تا ۱۱:۳۰) - ۳ ساعت ⏳",
                subject: "زیست‌شناسی 🧬 (اولویت بالا)",
                topic: "فصل هفتم تولید مثل - بخش دوم",
                activities: [
                    "۱.۵ ساعت: مطالعه هورمون‌های جنسی و چرخه‌ها",
                    "۱ ساعت: تمرکز روی مفاهیم هورمونی",
                    "۳۰ دقیقه: حل ۵ تا ۷ تست آموزشی"
                ]
            },
            {
                time: "عصر (۱۷:۰۰ تا ۱۸:۳۰) - ۱.۵ ساعت ⏳",
                subject: "عربی 🗣️ (مهارت‌محور)",
                topic: "درس اول عربی - حل تست جامع",
                activities: [
                    "۱ ساعت: حل ۱۵ تا ۲۰ تست ترکیبی",
                    "۳۰ دقیقه: تحلیل تست‌ها و مرور اشتباهات"
                ]
            }
        ]
    }
};

// Wait for page to load
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');
    createSchedule();
});

function createSchedule() {
    const container = document.querySelector('.schedule-container');
    if (!container) {
        console.log('Container not found');
        return;
    }
    
    // Create cards for each day
    Object.keys(scheduleData).forEach(dayKey => {
        const dayData = scheduleData[dayKey];
        const dayCard = createDayCard(dayData);
        container.appendChild(dayCard);
    });
}

function createDayCard(dayData) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    
    // Special day (Friday)
    if (dayData.special) {
        dayCard.innerHTML = `
            <div class="friday-special">
                <h3>${dayData.title}</h3>
                <p>${dayData.message}</p>
            </div>
        `;
        return dayCard;
    }
    
    // Regular day
    let sessionsHTML = '';
    dayData.sessions.forEach(session => {
        let activitiesHTML = '';
        if (session.activities) {
            activitiesHTML = `
                <ul>
                    ${session.activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            `;
        }
        
        // Determine subject class based on subject name
        let subjectClass = 'subject';
        if (session.subject.includes('زیست')) subjectClass += ' biology';
        else if (session.subject.includes('شیمی')) subjectClass += ' chemistry';
        else if (session.subject.includes('عربی')) subjectClass += ' arabic';
        else if (session.subject.includes('زبان')) subjectClass += ' english';
        else if (session.subject.includes('دینی')) subjectClass += ' religion';
        else if (session.subject.includes('فارسی')) subjectClass += ' persian';
        else if (session.subject.includes('عمومی')) subjectClass += ' general';
        
        sessionsHTML += `
            <div class="time-block">
                <h3>${session.time}</h3>
                <div class="${subjectClass}">
                    <h4>${session.subject}</h4>
                    <p><strong>مبحث:</strong> ${session.topic}</p>
                    ${activitiesHTML}
                </div>
            </div>
        `;
    });
    
    dayCard.innerHTML = `
        <div class="day-header">
            <span>${dayData.title}</span>
            <span class="toggle-icon">▼</span>
        </div>
        <div class="day-content">
            <div class="day-content-inner">
                ${sessionsHTML}
            </div>
        </div>
    `;
    
    // Add click event
    const header = dayCard.querySelector('.day-header');
    const content = dayCard.querySelector('.day-content');
    const icon = dayCard.querySelector('.toggle-icon');
    
    header.addEventListener('click', function() {
        console.log('Header clicked:', dayData.title);
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.classList.add('active');
            icon.style.transform = 'rotate(180deg)';
        }
    });
    
    return dayCard;
}