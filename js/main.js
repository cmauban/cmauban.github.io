
// HAMBURGER NAV
$('.hamburger').on('click', function(){
  $('.hamburger-nav').slideToggle('show');
});

$('.hamburger-nav li a').on('click', function(){
  $('.hamburger-nav').hide('show');
});



// SCROLLING
$('.nav a[href="#home"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#home').position().top}, 'slow'); return false;
});

$('.nav a[href="#portfolio"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#portfolio').position().top}, 'slow'); return false;
});

$('.nav a[href="#contact"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#contact').position().top}, 'slow'); return false;
});

$('.nav a[href="#blog"]').on('click', function(){
  $('html,body').animate({scrollTop: $('#blog').position().top}, 'slow'); return false;
});



$('.nav').each(function(){ //iterates through each ahref
  $('.main-content').each(function(){ //iterates through the corresponding content

  $('.nav a').on('click', function(event){
    // event.preventDefault(); //stop browser to take action for clicked

    $(this).addClass('active').siblings().removeClass('active'); //current href clicked is active

    var active = $(this).attr('href'); //targets active tab and grabs that href

    $(active).addClass('active').siblings().removeClass('active'); //activates the corresponding content

    });
  });
});
