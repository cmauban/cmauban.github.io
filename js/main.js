$('.hamburger').on('click', function(){
  $('.hamburger-nav').slideToggle('show');
});

// // hamburger menu behavior
// var hb=false;
// $('.hamburger').on('click', function(){
//   if (hb === false) {
//   $('.hamburger-nav').slideToggle('show');
//   setTimeout(function(){ hb=true; }, 500);
// }
// });
//
// $('.hamburger-nav li').on('click', function(){
//   $('.hamburger-nav').slideToggle('show');
//   hb=false;
// });

// $('*:not(.hamburger)').on('click', function(){
//   if (hb) {
//     $('.hamburger-nav').slideToggle('show');
//     hb=false;
//   }
// });



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
