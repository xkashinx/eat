$(function () {
    $(".price-button").click(function() {
        $(this).toggleClass("selected");
    });


    var set = new Set();
    var places = ["绿屋", "日本超市", "Piada", "麦当劳", "KFC", "Wendy's", "Moe's", "Oxley", "餐车", "Hongkong House", "Buckeye Pho",
        "丘记", "Bibimbop"];
    function roulette() {
        if (set.size === places.length) set.clear();
        var choice = Math.floor((places.length) * Math.random());
        if (set.has(places[choice])) {
            roulette();
        } else {
            $("#roulette").html("<h1 align='center'>" + places[choice] + "</h1>");
            set.add(places[choice]);
        }
    }
    roulette();
    $("#change-button").click(function() {
        roulette();
    });
});