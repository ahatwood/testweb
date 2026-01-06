document.addEventListener('DOMContentLoaded', function(){
  // set year in footers
  var y = new Date().getFullYear();
  var els = document.querySelectorAll('[id^="year"]');
  els.forEach(function(e){ e.textContent = y });

  // mobile nav toggle
  var toggle = document.getElementById('mobile-toggle');
  var nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

  // contact form simple feedback
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value || 'Friend';
      alert('Thanks, ' + name + '! We received your message and will be in touch.');
      form.reset();
    });
  }
});
