
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

$('#slider').click(function(e) {
    e.preventDefault();
});

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });




// slider 2
    $('.slider2').click(function(e) {
        e.preventDefault();
    });
    //
    //   $('#checkbox').change(function(){
    //     setInterval(function () {
    //         moveRight();
    //     }, 3000);
    //   });
    //
    // 	var slideCount = $('.slider2 ul li').length;
    // 	var slideWidth = $('.slider2 ul li').width();
    // 	var slideHeight = $('.slider2 ul li').height();
    // 	var sliderUlWidth = slideCount * slideWidth;
    //
    // 	$('.slider2').css({ width: slideWidth, height: slideHeight });
    //
    // 	$('.slider2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    //
    //     $('.slider2 ul li:last-child').prependTo('.slider2 ul');
    //
    //     function moveLeft() {
    //         $('.slider2 ul').animate({
    //             left: + slideWidth
    //         }, 200, function () {
    //             $('.slider2 ul li:last-child').prependTo('.slider2 ul');
    //             $('.slider2 ul').css('left', '');
    //         });
    //     }
    //
    //     function moveRight() {
    //         $('.slider2 ul').animate({
    //             left: - slideWidth
    //         }, 200, function () {
    //             $('.slider2 ul li:first-child').appendTo('.slider2 ul');
    //             $('.slider2 ul').css('left', '');
    //         });
    //     }
    //
    //     $('a.control_prev2').click(function () {
    //         moveLeft();
    //     });
    //
    //     $('a.control_next2').click(function () {
    //         moveRight();
    //     });
