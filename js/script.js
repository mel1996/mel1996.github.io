
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function copies() {
    var el = $(".slots .pin");
    var left = parseInt($(el).html());

    left = left > 5 ? left - rand(1, 3) : left - rand(-2, 2);
    if (left < 2) {
        $(el).html(1);
    } else $(el).html(left);

    setTimeout('copies()', rand(9000, 13000));
}

function visitors() {
	var el = $(".online .pin");
    var left = parseInt($(el).html());
	var start = left - 20;
	var end = left + 20;
	if (start < 100) start = left;
	if (end > 200) end = left;
    $(".online .pin").html(rand(start, end));
    setTimeout('visitors()', rand(3000, 13000));
}

visitors();
copies();