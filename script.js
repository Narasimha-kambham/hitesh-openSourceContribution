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
    const counters = document.querySelector(".top-Achievements span[data-count]");
    const container = document.querySelector(".top-Achievements");
    let activated = false;
    window.addEventListener("scroll",()=>{
        if(
            pageYOffset > container.offsetTop - container.offsetHeight - 300 && activated ===false 
        ){
        
             counters.innerText = 0;
                let count = 0 ;
                function updateCount() {
                    const target = parseInt(counters.dataset.count);
                    if (count <target) {
                        count=count+1111;
                        counters.innerText = `${count}+`;
                        setTimeout(updateCount,1)
                    }else{
                        counters.innerText = `${target}+`;
                    }
                }
                updateCount();
                activated = true;
            
         }else if(
            pageYOffset < container.offsetTop - container.offsetHeight - 500|| pageYOffset === 0 && activated === true
         ){
            counters.innerText = 0;
        
            activated = false;
         }
         
    })
});