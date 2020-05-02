window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    })

    const nav = document.querySelector('nav');
    const homeNav = document.getElementById('homeNav');
    const aboutNav = document.getElementById('aboutNav');
    const skillsNav = document.getElementById('skillsNav');
    const workNav = document.getElementById('workNav');
    const contactNav = document.getElementById('contactNav');
    
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
        if(window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + 2,
                left: 0,
                behavior: 'smooth'
            })
            // console.log(homeSection.clientHeight);
        } else {
            window.scrollTo({
                top: homeSection.clientHeight - nav.clientHeight + 42,
                left: 0,
                behavior: 'smooth'
            })
            // console.log(homeSection.clientHeight - nav.clientHeight + 40);
        }
        
    })

    skillsNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + 2,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight - nav.clientHeight + 42,
                left: 0,
                behavior: 'smooth'
            })
        }
        
    })

    workNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + 2,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight - nav.clientHeight + 42,
                left: 0,
                behavior: 'smooth'
            })
        }
        
    })

    contactNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + workSection.clientHeight + 2,
                left: 0,
                behavior: 'smooth'
            })  
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + workSection.clientHeight - nav.clientHeight + 42,
                left: 0,
                behavior: 'smooth'
            })  
        }
    })  
})