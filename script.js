document.addEventListener('DOMContentLoaded', () => {
    const sidebarTop = document.querySelector('.sidebar-top');
    const sidebarBottom = document.querySelector('.sidebar-bottom');

    window.addEventListener('scroll', () => {

    if(window.innerWidth > 799) {

        sidebarBottom.classList.remove('sidebar-bottom-fadein-right');

        if (window.scrollY > 250) {
            sidebarTop.classList.add('sidebar-top-fadein');
        }

        else {
            sidebarTop.classList.remove('sidebar-top-fadein')
        }

        if(window.scrollY > 500) {
            sidebarBottom.classList.add('sidebar-bottom-fadein');
        }
    
        else {
            sidebarBottom.classList.remove('sidebar-bottom-fadein');
        }
    }
        

    else {
        if (window.scrollY > 250) {
            sidebarTop.classList.add('sidebar-top-fadein');
            sidebarBottom.classList.add('sidebar-bottom-fadein-right');
        }

        else {
            sidebarTop.classList.remove('sidebar-top-fadein')
            sidebarBottom.classList.remove('sidebar-bottom-fadein-right');
        }

    }

        
        
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            sidebarBottom.classList.remove('sidebar-bottom-fadein-right');
        }

        else {
            sidebarBottom.classList.add('sidebar-bottom-fadein-right');
        }
    })
})
