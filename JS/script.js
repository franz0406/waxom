window.addEventListener("load", function(){
  const playVideoBtn = this.document.querySelector(".video > .contents > .icon");
  const videoModal = this.document.getElementById("overlay");
  const closeVideoBtn = videoModal.querySelector(".close");
  
  playVideoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.style.display = "block";
  })
  closeVideoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoModal.style.display = "none";
  })
})