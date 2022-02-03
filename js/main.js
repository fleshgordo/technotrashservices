$(document).ready(function () {
    let a = 0;
    if (window.location.hash !== "#no-objects") {
        $(".box").fadeIn("fast", function () {
            $(".box").draggable({
                preventCollision: true,
                containment: ".container-objects",
                start: function (event, ui) {
                    $(this).css("z-index", a++);
                }
            });
            // click handler for silhouettes, fade to black mask and redirect after short delay
            $(".box").click(function () {
                $(".fading-mask").css('opacity', 1);
                let redirect_url = $(this).data("link")
                setTimeout(function () {
                    window.location.href = redirect_url
                }, 250);
            });
        });
    } 

    $(".tts-page--project").append("<div class='fading-mask fading-mask--is-negative'></div>");
    // click handler for mask, fade to white and redirect back to index after short delay 
    $(".fading-mask--is-negative").click(function () {
        $(".fading-mask--is-negative").css('opacity', 1);
        setTimeout(function () {
            window.location.href = "/index.html"
        }, 250);
        console.log("test")
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