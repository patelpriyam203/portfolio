$(document).ready(function() {
    $("#project-list div:gt(0)").hide();
});

function sliderUp() {
    var $slide = $('#project-list div.current');
    $slide.fadeOut(200)
          .removeClass('current');

    if ($slide.is(':last-child')) {
        $slide.siblings(':first')
              .addClass('current')
              .fadeIn(200);
    } else {
        $slide.next()
          .addClass('current')
          .fadeIn(200);
    }

};

function sliderDown() {
    var $slide = $('#project-list div.current');
    $slide.fadeOut(200)
          .removeClass('current');

    if ($slide.is(':first-child')) {
        $slide.siblings(':last')
              .addClass('current')
              .fadeIn(200);
    } else {
        $slide.prev()
              .addClass('current')
              .fadeIn(200);
    }

};
$('#rightclick').click(function() {
    sliderUp();
});
$('#leftclick').click(function() {
    sliderDown();
})
