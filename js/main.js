$(function () {

    var placeCheap = ["绿屋", "日本超市", "Piada", "麦当劳", "KFC", "Oxley", "餐车", "Wendy's", "Bibimbop"];
    var placeMedium = ["Moe's", "Hongkong House", "Buckeye Pho", "丘记"];
    var places = placeCheap;
    $(".price-button").click(function() {
        if (!$(this).hasClass("selected")) {
            $(".price-button").each(function() {
                $(this).toggleClass("selected");
            });
            console.log($(".selected").id);
            if ($(".selected").attr("id") === "price-cheap") {
                places = placeCheap;
            } else {
                places = placeMedium;
            }
            set.clear();
        }
        console.log(places);
    });
    var set = new Set();
    function roulette() {
        if (set.size >= places.length) set.clear();
        var choice = Math.floor((places.length) * Math.random());
        if (set.has(places[choice])) {
            roulette();
        } else {
            $("#roulette").html("<h1 align='center'>" + places[choice] + "</h1>");
            set.add(places[choice]);
        }
        console.log(set);
    }
    roulette();
    $("#change-button").click(function() {
        roulette();
    });
});