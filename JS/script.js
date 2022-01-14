window.addEventListener("load", function(){
    const w = window;
    const mainSlider = document.querySelector(".main_slider > .slider_list"),
          mainSLiderList = mainSlider.querySelectorAll("li");
    
    function setSliderHeight(){
        let winHeight = w.innerHeight;
        mainSLiderList.forEach(item => {
            item.style.height = `${winHeight}px`;
        })
    }
    setSliderHeight();
          
    w.addEventListener("resize", () => {
        setSliderHeight();
    })
    
})