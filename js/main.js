$(document).ready(function () {
    let a = 3;
    $("#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8").draggable({
        preventCollision: true,
        containment: ".container-objects",
        start: function (event, ui) {
            $(this).css("z-index", a++);
        }
    });

    // random positioning of objects
    $(".box").each(element => {
        let offset = 100;
        let x = Math.floor(Math.random() * window.innerWidth-offset);
        let y = Math.floor(Math.random() * window.innerHeight-offset);
        let random_rotate = 5 - Math.floor(Math.random()*10)
        //console.log(random_rotate)
        $("#box"+element).css({top: y + "px", left: x + "px", position:'absolute', transform: "rotate("+random_rotate+"deg"});
    });
});