// /js/script.js

document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'KOR';

    const T = (localizedString) => {
        if (typeof localizedString === 'string') return localizedString;
        return localizedString[currentLanguage.toLowerCase()] || localizedString['kor'];
    };

    const icons = {
        email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5v2l-8 5-8-5V6z"/></svg>`,
        phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
        location: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
        github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/></svg>`,
        linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-12 5v10h4V12H7zm2-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 8v10h4v-5c0-2-1-3-3-3s-3 1-3 3v5h-4V8h4v1c.5-1 1.5-2 3-2 2.5 0 4 1.5 4 4v5h-4v-5c0-1-.5-1.5-1.5-1.5S13 12 13 13v5h-1z"/></svg>`,
        blog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 11H6V9h2v2zm0-4H6V5h2v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V5h4v2z"/></svg>`,
        sections: {
            introduction: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
            education: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
            experience: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/></svg>`,
            projects: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>`,
            skills: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
            research: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/></svg>`,
            awards: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
        }
    };

    const navMenuData = [
        { id: "introduction", kor: "소개", eng: "Intro" },
        { id: "education", kor: "학력", eng: "Education" },
        { id: "experience", kor: "경력", eng: "Experience" },
        { id: "projects", kor: "프로젝트", eng: "Projects" },
        { id: "skills", kor: "기술", eng: "Skills" },
        { id: "research", kor: "연구", eng: "Research" },
        { id: "awards", kor: "수상/자격증", eng: "Awards" },
    ];

    function renderAll() {
        renderSummary();
        renderNav();
        renderIntroduction();
        renderEducation();
        renderExperience();
        renderProjects();
        renderSkills();
        renderResearch();
        renderAwards();
        renderFooter();
    }
    
    function renderNav() {
        const navTitle = document.querySelector('.nav-title a');
        navTitle.textContent = T(cvData.personalInfo.name);

        const navMenu = document.querySelector('.nav-menu');
        navMenu.innerHTML = navMenuData.map(item => `
            <li><a href="#${item.id}">${T(item)}</a></li>
        `).join('');
    }

    function renderSummary() {
        document.querySelector('.profile-info .name').textContent = T(cvData.personalInfo.name);
        document.querySelector('.profile-info .tagline').textContent = T(cvData.personalInfo.tagline);

        const contactInfo = document.querySelector('.contact-info');
        contactInfo.innerHTML = cvData.personalInfo.contact.map(item => `
            <div>
                ${icons[item.icon]}
                <a href="${item.link || '#'}">${currentLanguage === 'KOR' ? item.text : (item.eng_text || item.text)}</a>
            </div>
        `).join('');

        const keywords = document.querySelector('.keywords .tags');
        keywords.innerHTML = cvData.summary.keywords.map(kw => `<span class="tag">${T(kw)}</span>`).join('');
        
        document.querySelector('.keywords h3').textContent = currentLanguage === 'KOR' ? '주요 키워드' : 'Keywords';
        document.querySelector('.qualification h3').textContent = currentLanguage === 'KOR' ? '주요 자격 요약' : 'Qualification';
        document.querySelector('.qualification p').textContent = T(cvData.summary.qualification);

        const links = document.querySelector('.external-links ul');
        links.innerHTML = cvData.personalInfo.links.map(link => `
            <li>
                <a href="${link.link}" target="_blank">
                    ${icons[link.icon]}
                    ${currentLanguage === 'KOR' ? link.text : (link.eng_text || link.text)}
                </a>
            </li>
        `).join('');
        document.querySelector('.external-links h3').textContent = currentLanguage === 'KOR' ? '외부 링크' : 'External Links';
    }

    function renderSectionTitle(sectionId, titleData) {
        const section = document.querySelector(`#${sectionId}`);
        const titleEl = section.querySelector('.section-title .title-text');
        const iconEl = section.querySelector('.section-title .icon');
        titleEl.textContent = T(titleData);
        iconEl.innerHTML = icons.sections[sectionId];
    }
    
    function renderIntroduction() {
        const sectionData = navMenuData.find(i => i.id === 'introduction');
        renderSectionTitle('introduction', sectionData);
        document.querySelector('#about-me-title').textContent = currentLanguage === 'KOR' ? '자기소개' : 'About Me';
        document.querySelector('#my-goal-title').textContent = currentLanguage === 'KOR' ? '목표' : 'My Goal';
        document.querySelector('#about-me-content').textContent = T(cvData.introduction.about);
        document.querySelector('#my-goal-content').textContent = T(cvData.introduction.goal);
    }

    function renderEducation() {
        const sectionData = navMenuData.find(i => i.id === 'education');
        renderSectionTitle('education', sectionData);
        const timeline = document.querySelector('#education .timeline');
        timeline.innerHTML = cvData.education.map(edu => `
            <div class="timeline-item">
                <h4>${T(edu.degree)}</h4>
                <div class="school">${T(edu.school)}</div>
                <div class="period">${edu.period}</div>
                <div class="description">${T(edu.description)}</div>
            </div>
        `).join('');
    }

    function renderExperience() {
        const sectionData = navMenuData.find(i => i.id === 'experience');
        renderSectionTitle('experience', sectionData);
        const cardList = document.querySelector('#experience .card-list');
        cardList.innerHTML = cvData.experience.map(exp => `
            <div class="card">
                <div class="card-header">
                    <h4>${T(exp.position)} @ <span>${exp.company}</span></h4>
                    <div class="period">${currentLanguage === 'KOR' ? exp.period : exp.eng_period}</div>
                </div>
                <ul>
                    ${exp.tasks.map(task => `<li>${T(task)}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    function renderProjects() {
        const sectionData = navMenuData.find(i => i.id === 'projects');
        renderSectionTitle('projects', sectionData);
        const projectGrid = document.querySelector('#projects .project-grid');
        projectGrid.innerHTML = cvData.projects.map((proj, index) => `
            <div class="project-card">
                <img src="${proj.thumbnail}" alt="${T(proj.title)}" class="thumbnail">
                <div class="project-card-body">
                    <h4>${T(proj.title)}</h4>
                    <p>${T(proj.description)}</p>
                    <div class="tech-stack">
                        ${proj.techStack.map(tech => `<span class="tech">${tech}</span>`).join('')}
                    </div>
                    <button class="view-project-btn" data-index="${index}">${currentLanguage === 'KOR' ? '프로젝트 보기' : 'View Project'}</button>
                </div>
            </div>
        `).join('');
    }
    
    function renderSkills() {
        const sectionData = navMenuData.find(i => i.id === 'skills');
        renderSectionTitle('skills', sectionData);
        const skillList = document.querySelector('#skills .skill-list');
        skillList.innerHTML = cvData.skills.map(cat => `
            <div class="skill-category">
                <h4 class="skill-category-title">${T(cat.category)}</h4>
                ${cat.items.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-level-bar">
                            <div class="skill-level-fill" style="width: ${skill.level * 20}%;"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
    }
    
    function renderResearch() {
        const sectionData = navMenuData.find(i => i.id === 'research');
        renderSectionTitle('research', sectionData);
        const listContainer = document.querySelector('#research .list-container');
        listContainer.innerHTML = cvData.research.map(item => `
            <li>
                <div class="list-item-title">${T(item.title)}</div>
                <div class="list-item-meta">${T(item.venue)} | ${item.date}</div>
                <a href="${item.link}" target="_blank" class="list-item-link">${currentLanguage === 'KOR' ? '논문 보기' : 'View Paper'}</a>
            </li>
        `).join('');
    }
    
    function renderAwards() {
        const sectionData = navMenuData.find(i => i.id === 'awards');
        renderSectionTitle('awards', sectionData);
        const listContainer = document.querySelector('#awards .list-container');
        listContainer.innerHTML = cvData.awards.map(item => `
            <li>
                <div class="list-item-title">${T(item.name)}</div>
                <div class="list-item-meta">${T(item.issuer)} | ${item.date}</div>
            </li>
        `).join('');
    }

    function renderFooter() {
        const footer = document.querySelector('#footer p');
        footer.textContent = `© 2025 ${T(cvData.personalInfo.name)}. All Rights Reserved.`;
    }


    // --- Event Listeners ---
    
    // Language Toggle
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const selectedLang = e.target.dataset.lang;
            if (selectedLang !== currentLanguage) {
                currentLanguage = selectedLang;
                langToggle.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                renderAll();
            }
        }
    });

    // Modal Handling
    const contactModal = document.getElementById('contact-modal');
    const projectModal = document.getElementById('project-modal');
    const contactBtn = document.querySelector('.cta-button');
    const closeButtons = document.querySelectorAll('.close-button');

    contactBtn.onclick = () => contactModal.style.display = 'block';
    
    closeButtons.forEach(btn => {
        btn.onclick = () => {
            contactModal.style.display = 'none';
            projectModal.style.display = 'none';
        };
    });

    window.onclick = (event) => {
        if (event.target == contactModal || event.target == projectModal) {
            contactModal.style.display = 'none';
            projectModal.style.display = 'none';
        }
    };
    
    // Delegate project modal opening to the projects section
    document.getElementById('projects').addEventListener('click', e => {
        if (e.target.classList.contains('view-project-btn')) {
            const projectIndex = e.target.dataset.index;
            const projectData = cvData.projects[projectIndex];
            const modalBody = document.getElementById('project-modal-body');
            modalBody.innerHTML = `
                <h2>${T(projectData.title)}</h2>
                <img src="${projectData.thumbnail}" style="width:100%; margin-bottom: 1rem;" alt="${T(projectData.title)}"/>
                <p>${T(projectData.description)}</p>
                <div class="tech-stack" style="margin: 1rem 0;">
                    ${projectData.techStack.map(tech => `<span class="tech">${tech}</span>`).join('')}
                </div>
            `;
            projectModal.style.display = 'block';
        }
    });

    // Initial Render
    renderAll();
});