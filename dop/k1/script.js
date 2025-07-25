// Main application script
document.addEventListener('DOMContentLoaded', () => {
    renderIntroSection();
    renderRulesSection();
    renderScheduleSection();
    renderConclusionSection();
});

// Render introduction section
function renderIntroSection() {
    const introSection = document.querySelector('.intro-section');
    
    // Add opening paragraph
    const openingDiv = document.createElement('div');
    openingDiv.className = 'opening-message';
    openingDiv.innerHTML = `<p>${introContent.opening}</p>`;
    introSection.insertBefore(openingDiv, introSection.firstChild);
    
    // Update Hasti message
    const hastiMessage = document.querySelector('.hasti-message');
    hastiMessage.innerHTML = `
        <h2>${introContent.hastiMessage.title}</h2>
        <p>${introContent.hastiMessage.content}</p>
        <p class="highlight"><strong>${introContent.hastiMessage.highlight}</strong></p>
    `;
    
    // Update parents message
    const parentsMessage = document.querySelector('.parents-message');
    parentsMessage.innerHTML = `
        <h2>${introContent.parentsMessage.title}</h2>
        <p>${introContent.parentsMessage.content}</p>
    `;
}

// Render rules section
function renderRulesSection() {
    const rulesGrid = document.querySelector('.rules-grid');
    rulesGrid.innerHTML = '';
    
    rulesContent.rules.forEach(rule => {
        const ruleCard = document.createElement('div');
        ruleCard.className = 'rule-card';
        
        let itemsHTML = '';
        if (rule.items) {
            itemsHTML = `
                <ul>
                    ${rule.items.map(item => `<li><strong>${item}</strong></li>`).join('')}
                </ul>
            `;
        }
        
        let specialNoteHTML = '';
        if (rule.specialNote) {
            specialNoteHTML = `
                <div class="special-note">
                    <strong>${rule.specialNote.title}</strong> ${rule.specialNote.content}
                </div>
            `;
        }
        
        ruleCard.innerHTML = `
            <h3>${rule.title}</h3>
            <p>${rule.description}</p>
            ${itemsHTML}
            ${specialNoteHTML}
        `;
        
        rulesGrid.appendChild(ruleCard);
    });
}

// Render schedule section
function renderScheduleSection() {
    const scheduleContainer = document.querySelector('.schedule-container');
    scheduleContainer.innerHTML = '';
    
    const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    
    dayOrder.forEach(dayKey => {
        if (completeScheduleData[dayKey]) {
            const dayCard = createDayCard(dayKey, completeScheduleData[dayKey]);
            scheduleContainer.appendChild(dayCard);
        }
    });
}

// Create day cards with complete data
function createDayCard(dayKey, dayData) {
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    
    if (dayData.special) {
        // Special day (Friday)
        dayCard.innerHTML = `
            <div class="friday-special">
                <h3>${dayData.title}</h3>
                <p>${dayData.message}</p>
            </div>
        `;
        return dayCard;
    }
    
    // Regular day
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.innerHTML = `
        <span>${dayData.title}</span>
        <span class="toggle-icon">▼</span>
    `;
    
    const dayContent = document.createElement('div');
    dayContent.className = 'day-content';
    
    const dayContentInner = document.createElement('div');
    dayContentInner.className = 'day-content-inner';
    
    // Add sessions with complete details
    dayData.sessions.forEach(session => {
        const timeBlock = document.createElement('div');
        timeBlock.className = 'time-block';
        
        let activitiesHTML = '';
        if (session.activities) {
            activitiesHTML = `
                <div class="activities-section">
                    <h5>فعالیت‌ها:</h5>
                    <ul>
                        ${session.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        
        let summaryHTML = '';
        if (session.summary) {
            summaryHTML = `
                <div class="summary-note">
                    <strong>خلاصه‌نویسی:</strong> ${session.summary}
                </div>
            `;
        }
        
        timeBlock.innerHTML = `
            <h3>${session.time}</h3>
            <div class="subject">
                <h4>${session.subject}</h4>
                <div class="subject-content">
                    <p><strong>مبحث:</strong> ${session.topic}</p>
                    ${activitiesHTML}
                    ${summaryHTML}
                </div>
            </div>
        `;
        
        dayContentInner.appendChild(timeBlock);
    });
    
    dayContent.appendChild(dayContentInner);
    dayCard.appendChild(dayHeader);
    dayCard.appendChild(dayContent);
    
    // Add click event for accordion (multiple can stay open)
    dayHeader.addEventListener('click', () => {
        const isActive = dayContent.classList.contains('active');
        const toggleIcon = dayHeader.querySelector('.toggle-icon');
        
        if (isActive) {
            dayContent.classList.remove('active');
            toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            dayContent.classList.add('active');
            toggleIcon.style.transform = 'rotate(180deg)';
        }
    });
    
    return dayCard;
}

// Render conclusion section
function renderConclusionSection() {
    const finalMessage = document.querySelector('.final-message');
    finalMessage.innerHTML = `
        <h2>${conclusionContent.title}</h2>
        <p>${conclusionContent.message}</p>
        <p class="celebration"><strong>${conclusionContent.celebration}</strong></p>
        <p><strong>${conclusionContent.expectation}</strong></p>
    `;
}