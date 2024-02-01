$(document).ready(()=>{

    const sections = $("section"),
          navLinks = $("nav a");

    function scrollSection(){
        $(window).on('scroll', ()=>{
            sections.each((i, sec)=>{
                let top = window.scrollY
                let offset = sec.offsetTop - 200
                let height = sec.offsetHeight
                let id = $(sec).attr('id')
    
                if(top >= offset && top < offset + height){
                    navLinks.each((i, link)=>{
                        $(link).removeClass('active')
                        $('nav a[href="#'+ id +'"]').addClass('active')
                    })
                    // console.log("top: "+top, "offset: "+offset, "height: "+height)
                }
    
                
            })
            // navbar sticky
    
            if(window.scrollY > 100){
                $('header').addClass('sticky')
            }else{
                $('header').removeClass('sticky')
            }
    
            // remove active when user click on link (scroll event)
            if($('nav.navbar').hasClass('active')){
                $('nav.navbar').removeClass('active')
            }
        })
    }
    
    // console.log(sections, navLinks)
    
    // navbar show hide
    $("#menu-icon").click(function(){
        $('nav.navbar').toggleClass('active')
    })

    $("#xmark").click(function(){
        $('nav.navbar').removeClass('active')
    })
    
    // scroll reveal
    ScrollReveal({ 
        // reset: true, // annimation will show up only once
        distance: "80px",
        duration: 2000,
        delay: 200
    }); 

    ScrollReveal().reveal('.home-content, .about-content h2, .about-img, .heading', { origin: 'top' });
    ScrollReveal().reveal(' .home-content h1, .contact-container .email', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });
    ScrollReveal().reveal('.home-img img, .about-img, .projects-container .project-box, .contact-container a, .services-container', 
        { origin: 'bottom' }
    );

    // typed.js for animation text
    //Full-Stack Developer
    const typed =  new Typed('.text-animate', {
        strings: ['Développeur Full-Stack', 'Développeur PHP', 'Développeur web'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
})


/*
<!-- google translate -->
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script defer>
        function googleTranslateElementInit() {
            new google.translate.TranslateElement(
                {pageLanguage: 'fr'}, 
                'google_translate_element',
            );
        }

        setInterval(()=>{
            if($(document.body).css('top') == '40px'){
                $('#header').css('margin-top', '5rem')
                $('section#home').css('margin-top', '6rem')
            }else{
                $('section#home').css('margin-top', '0')
                $('#header').css('margin-top', '0')
            }
        }, 1000)

    </script>

*/ 