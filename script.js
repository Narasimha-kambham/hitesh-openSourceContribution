document.addEventListener("DOMContentLoaded",()=>{
    //nav-bar items 
    document.querySelector(".navbar-nav").addEventListener("click",(e)=>{
        if(e.target.tagName === "A"){
            document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
                link.classList.remove("active");
                
            });

            e.target.classList.add("active");
             
        }
        
    })
    document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault(); // Prevent default anchor behavior
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

});