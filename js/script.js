{
        let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let met = document.getElementById('met');
        let ab = document.getElementById('ab');

        window.addEventListener('scroll', function(){
            var value = window.scrollY;
            stars.style.left = value * 0.4 + "px";
            moon.style.top = value * 0.5 + "px";
            met.style.top = value * 0.3 + "px";
            met.style.right = value * 0.8 + "px";
            
        })
}
{
    const lang = document.querySelector(".lang");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () =>{
        lang.classList.toggle("active");
    })
}