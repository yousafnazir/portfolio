function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
window.onscroll = function() {
  const backToTopButton = document.getElementById('back-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};
function animateProgressBar(barId, percentageId, targetPercentage, duration) {
  const progressBar = document.getElementById(barId);
  const percentageElement = document.getElementById(percentageId);

  let currentPercentage = 0;
  const interval = 10;
  const increment = (targetPercentage / (duration / interval));

  const progressAnimation = setInterval(() => {
    if (currentPercentage >= targetPercentage) {
      clearInterval(progressAnimation);
    } else {
      currentPercentage += increment;
      progressBar.style.width = currentPercentage + '%';
      percentageElement.textContent = Math.round(currentPercentage) + '%';
    }
  }, interval);
}


animateProgressBar('progress-bar-1', 'percentage-1', 100, 2000); 
animateProgressBar('progress-bar-2', 'percentage-2', 90, 2000);  
animateProgressBar('progress-bar-3', 'percentage-3', 80, 2000); 
animateProgressBar('progress-bar-4', 'percentage-4', 70, 2000);  





document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const galleryItems = document.querySelectorAll(".item");
  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          const filterValue = this.getAttribute("data-filter");

       
          if (filterValue === "all") {
              galleryItems.forEach(item => {
                  item.style.display = "block";
              });
          } else {
             
              galleryItems.forEach(item => {
                  if (item.classList.contains(filterValue)) {
                      item.style.display = "block";
                  } else {
                      item.style.display = "none";
                  }
              });
          }

          filterButtons.forEach(btn => {
              btn.classList.remove("active");
          });
          this.classList.add("active");
      });
  });
});
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: false
});
sr.reveal('.content-div' ,{delay:200, origin:'top'});
sr.reveal('.m-p' ,{delay:450, origin:'top'});
sr.reveal('.icons' ,{delay:200, origin:'left'});
sr.reveal('.navbar-4' ,{delay:200, origin:'left'});


const togglebtn =document.querySelector(".toggle-btn")
const togglebtnicon = document.querySelector(".toggle-btn i")
const dropdown = document.querySelector(".dropdown-menu")
 
togglebtn.onclick = function () {
   dropdown.classList.toggle('open')
   const isOpen = dropdown.classList.contains('open')

   togglebtnicon.classList = isOpen
   ? 'far fa-window-close'
   : 'fas fa-bars'
};