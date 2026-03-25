var slideIndex = 1;

function managePage(event) {
  var targetDiv = event.target;
  if (document.getElementById(targetDiv.id).parentElement.getElementsByClassName('selected').length > 0) {
  document.getElementById(targetDiv.id).parentElement.getElementsByClassName('selected')[0].classList.remove('selected');
  }
  document.getElementById(targetDiv.id).classList.add("selected");

  switch(targetDiv.id) {
  case 'home-page':
  showHideDiv('landing-page');
  break;
  case 'about-page':
  showHideDiv('about');
  break;
  case 'menu-page':
  showHideDiv('menu');
  break;
  case 'gallery-page':
  showHideDiv('gallery');
  let slideIndex = 1;
  showSlides(slideIndex);
  break;
  case 'healthy-tips-page':
  showHideDiv('healty-tips');
  break;
  case 'contact-page':
  showHideDiv('contact');
  break;
  }
}

function showHideDiv(id) {
  let allPages = ['landing-page', 'about', 'menu', 'gallery' , 'contact', 'healty-tips'];
  let targetIndex = allPages.indexOf(id);
  allPages.splice(targetIndex, 1);
  //Show div
  document.getElementById(id).style.display="block";
  for (var i = 0; i < allPages.length; i++) {
  //hide divs
  document.getElementById(allPages[i]).style.display="none";
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides) {
  slides[slideIndex-1].style.display = "block";
  }
}

function sendEmail() {
  const form = document.getElementById('contact-form');
  Email.send({
  Host: "smtp.gmail.com",
  Username : "blueplates22@gmail.com",
  Password : "#blueplates2022#",
  To : "blueplates22@gmail.com",
  From : form.userEmail.value,
  Subject : "Feedback/Query from "+ form.userName.value + " for Blues Plates",
  Body : form.userComment.value,
  }).then(
  message => {
  alert("mail sent successfully");
  form.reset();
  });
}