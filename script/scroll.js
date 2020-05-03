window.addEventListener('load', () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    
        if(window.scrollY > 0) {
            homeSection.style.height = '90vh'
        } else {
            homeSection.style.height = '100vh';
        }
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
                top: homeSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
            // console.log(homeSection.clientHeight + 1);
        } else {
            window.scrollTo({
                top: homeSection.clientHeight - nav.clientHeight + 44,
                left: 0,
                behavior: 'smooth'
            })
            // console.log(homeSection.clientHeight - nav.clientHeight + 41);
        }
        
    })

    skillsNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight - nav.clientHeight + 41,
                left: 0,
                behavior: 'smooth'
            })
        }
        
    })

    workNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight - nav.clientHeight + 41,
                left: 0,
                behavior: 'smooth'
            })
        }
        
    })

    contactNav.addEventListener('click', () => {
        if (window.scrollY > 0) {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + workSection.clientHeight + 1,
                left: 0,
                behavior: 'smooth'
            })  
        } else {
            window.scrollTo({
                top: homeSection.clientHeight + aboutSection.clientHeight + skillsSection.clientHeight + workSection.clientHeight - nav.clientHeight + 41,
                left: 0,
                behavior: 'smooth'
            })  
        }
    })  
})