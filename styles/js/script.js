// ==============Start Topnav======
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };


const currentLocation = location.href;
const menuItem = document.querySelectorAll("header .nav-bar ul a");
const menuLength = menuItem.length;

for(var i = 0 ; i < menuLength; i++){
  if(menuItem[i].href === currentLocation){
    menuItem[i].className = "active";
  }
}
// ==============End Topnav======

// =======Start ScrollTop=========
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);
  if (pos>100){
    scrollProgress.style.display = "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#90B20D ${scrollValue}%, #a7a7a7 ${scrollValue}%)`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// ======End ScrollTop=========

// ========Start Type effect text=======
var typed = new Typed(".auto-type", {
  strings: ["أهلاً و سهلاً بضيوفنا الاعزاء"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})
// =========End Type effect text========

// ========Start Type Read more=======
// const parentContainer = document.querySelector(".read-more-container");
// parentContainer.addEventListener('click', event =>{
//   const current = event.target;
//   const isReadMoreBtn = current.className.includes('read-more-btn');
//   if(!isReadMoreBtn) return;
  
//   const currentText = event.target.parentNode.querySelector('.read-more-text');
//   currentText.classList.toggle('read-more-text--show');
//   current.textContent = current.textContent.includes('قراءة المزيد') ?
//   "....قراءة اقل" : "....قراءة اقل";

// });


// ===================
let noOfCharac = 150;
let contents = document.querySelectorAll(".read-more-text");
contents.forEach(content => {
  // If text length is less that noOfCharac .... Then hide the read more button
  if(content.textContent.length < noOfCharac){
    content.nextElementSibling.style.display = "none";
  }else{
    let displayText = content.textContent.slice(0,noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}
    <span class="dots">.....</span><span class="hide more">${moreText}</span>`;
  }
});

function readMore(btn){
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  // console.log(post);
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "قراءة المزيد" ? btn.textContent = "اخفاء" : btn.textContent = "قراءة المزيد";
}
// ========End Type Read more=======

// Start Fade and scroll items into view while scrolling


// End Fade and scroll items into view while scrolling
