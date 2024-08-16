let mm = gsap.matchMedia();
mm.add("(min-width:800px)",()=>{

    gsap.to("#container10 h1",{
        transform:"translate(-16000%)",
        scrollTrigger:{
            trigger:"#container10",
            scroller:"body",
            markers:false,
            start:"top 0%",
            end:"top -100%",
            scrub:2,
            pin:true
    
        }
       
    
    })

})














