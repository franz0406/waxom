document.addEventListener("DOMContentLoaded", function(){
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

  const animateNum = document.querySelectorAll(".clear > li > h3");

  var waypoint = new Waypoint({
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
    offset: '50%'
  })

});