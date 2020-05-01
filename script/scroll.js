window.addEventListener('load', () => {
    const homeNav = document.getElementById('homeNav');
    const aboutNav = document.getElementById('aboutNav');
    const skillsNav = document.getElementById('skillsNav');
    const workNav = document.getElementById('workNav');
    const contactNav = document.getElementById('contactNav');
    
    const nav = document.getElementsByTagName('nav')[0];
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const workSection = document.getElementById('work');
    const contactSection = document.getElementById('contact');
    
    homeNav.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    aboutNav.addEventListener('click', () => {
        window.scrollTo({
            top: homeSection.clientHeight,
            left: 0,
            behavior: 'smooth'
        })
    })

    skillsNav.addEventListener('click', () => {
        window.scrollTo({
            top: homeSection.clientHeight + aboutSection.clientHeight,
            left: 0,
            behavior: 'smooth'
        })
    })

    workNav.addEventListener('click', () => {
        window.scrollTo({
            top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight,
            left: 0,
            behavior: 'smooth'
        })
    })

    contactNav.addEventListener('click', () => {
        window.scrollTo({
            top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + workSection.clientHeight,
            left: 0,
            behavior: 'smooth'
        })
    })
})