var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  deleteSpeed:5
});

typewriter
  .pauseFor(1000)
  .typeString('hello!')
  .pauseFor(500)
  .deleteAll()
  .pauseFor(1000)
  .typeString('nice to meet you.')
  .pauseFor(500)
  .deleteAll()
  .pauseFor(1000)
  .typeString('my name is tony.')
  .pauseFor(500)
  .deleteAll()
  .typeString("i'm a student at uva.")
  .pauseFor(500)
  .deleteAll()
  .typeString("i'm studying to be a full stack dev.")
  .pauseFor(500)
  .deleteAll()
  .start();


  // When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollNav()};

function scrollNav() {
  if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}

$(document).ready(function() {
  $('.menu-btn').on('click', function() {
      $(this).toggleClass('open');
      $('.nav-bar').toggleClass('open');
  });

  $('.nav-bar .nav-link').on('click', function() {
      $('.menu-btn').removeClass('open');
      $('.nav-bar').removeClass('open');
  });

  AOS.init({
      easing: 'ease',
      duration: 1800,
      disable: 'phone',
  });
});

