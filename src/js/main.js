
$('.navlist').each(function(){ //iterates through each ahref
  $('.blog-content').each(function(){ //iterates through the corresponding content

  $('a').on('click', function(event){
    event.preventDefault(); //stop browser to take action for clicked

    $(this).addClass('active').siblings().removeClass('active'); //current href clicked is active

    var active = $(this).attr('href'); //targets active tab and grabs that href

    $(active).addClass('active').siblings().removeClass('active'); //activates the corresponding content



    });
  });
});
