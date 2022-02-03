$(document).ready(function () {
    let a = 3;
    $("#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8").draggable({
        preventCollision: true,
        containment: ".container-objects",
        start: function (event, ui) {
            $(this).css("z-index", a++);
        }
    });
    $(".box").click(function () {
        $(this).css('transform', 'scale(100)');
        let redirect_url = $(this).data("link")
        setTimeout(function () {
            window.location.href = redirect_url
        }, 300);
    });
    $(".tss-clip-path").click(function () {
        document.querySelector(".extension-mask").style.transition = "all .5s ease-in"
        document.querySelector(".extension-mask").style.maskSize = "500% auto"
        document.querySelector(".extension-mask").style.webkitMaskSize = "500% auto"
        document.querySelector(".extension-mask").style.maskPosition = "-200vw -50vh"
        document.querySelector(".extension-mask").style.webkitMaskPosition = "-200vw -50vh"
        setTimeout(function () {
            window.location.href = "/index.html"
        }, 300);
        
    });
    let random_pos_x = [];
    let random_pos_y = [];
    let number_of_elements = 8;
    // generate array with equal positioning on width and height
    for (let i = 0; i < number_of_elements; i++) {
        let offset = 50;
        random_pos_x.push(Math.floor(i * window.innerWidth / number_of_elements))
        random_pos_y.push(Math.floor(i * window.innerHeight / number_of_elements - offset))
    }
    // shuffle position array
    random_pos_x.sort(() => (Math.random() > .5) ? 1 : -1);
    random_pos_y.sort(() => (Math.random() > .5) ? 1 : -1);
    // random positioning of objects
    $(".box").each(element => {

        let random_rotate = 15;
        let x = random_pos_x[element]
        let y = random_pos_y[element]
        element += 1;
        y > window.innerHeight - 400 ? y - $("#box" + element).css("height") : y;
        x > window.innerWidth - 400 ? y - $("#box" + element).css("width") : y;

        let random_deg = random_rotate * .5 - Math.floor(Math.random() * random_rotate)
        $("#box" + element).css({
            top: y + "px",
            left: x + "px",
            position: 'absolute',
            transform: "rotate(" + random_deg + "deg"
        });
    });
});