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

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});
sr.reveal('.content-div' ,{delay:200, origin:'top'});
sr.reveal('.m-p' ,{delay:450, origin:'top'});
sr.reveal('.icons' ,{delay:200, origin:'left'});
sr.reveal('.nav-menu' ,{delay:200, origin:'left'});