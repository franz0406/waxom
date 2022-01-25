document.addEventListener("DOMContentLoaded", function(){
  // 비디오 섹션
  const playVideoBtn = document.querySelector(".video > .contents > .icon");
  const videoModal = document.getElementById("overlay");
  const closeVideoBtn = videoModal.querySelector(".close");
  
  playVideoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.style.display = "block";
  })
  closeVideoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.style.display = "none";
  })

  // 숫자 증가 애니메이션
  const animateNum = document.querySelectorAll(".clear > li > h3");

  var counterWaypoint = new Waypoint({
    element: document.querySelector('.counters'),
    handler: function(direction) {
      animateNum.forEach((item)=>{
        const getRate = item.getAttribute('data-rate');
        let initNum = 0;
        let numCount = setInterval(()=>{
            initNum += 5;
            item.innerText = initNum;           
            if(initNum >= Number(getRate)) clearInterval(numCount);
        }, 5);
        this.destroy();
      })
    },
    offset: '70%'
  });

  // Service 섹션 애니메이션 실행할 클래스 추가
  const serviceSection = document.querySelector('.services');
  const ServiceWaypoint = new Waypoint({
    element: document.querySelector('.services'),
    handler: function(direction) {
      serviceSection.classList.add("active");
    },
    offset: '80%'
  });

  // Recent post 섹션 BX Slider
  const postList = document.querySelector(".posts_slider > li:first-of-type"),
        listWidth = postList.offsetWidth;  

  $(document).ready(function(){
    $('.posts_slider').bxSlider({      
      minSlides: 1,
      maxSlides: 3,
      slideMargin: 30,
      moveSlides: 1,
      slideWidth: 370,
      pager: false,
      shrinkItems: true,
      auto: true,
      autoHover: true
    });
  });

  // 헤더 고정
  const header = document.querySelector("header");
  window.addEventListener("scroll", function() {

    if( this.scrollY > 0){
      header.classList.add("sticky");      
    }else{
      header.classList.remove("sticky");  
    }
  })

});