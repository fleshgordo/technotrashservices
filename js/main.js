$(document).ready(function() {
    var a = 3;
    $(
      "#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8"
    ).draggable({
      start: function(event, ui) {
        $(this).css("z-index", a++);
      }
    });
    //   $('#dragZone div').click(function() {
    //     $(this).addClass('top').removeClass('bottom');
    //     $(this).siblings().removeClass('top').addClass('bottom');
    //     $(this).css("z-index", a++);

    //   });
  });