$(".kelce").hide()
$("#football").hide()

$("#get-started").click(function(){
    $(".rules").hide()
    $(".header").html("<h1>Click the football to throw it to Kelce</h1>")
    $(".kelce").show()
    $("#football").show()
})

$("#football").click(function(){
    $(".header").html("<h1>Touchdown KANSAS CITY!</h1> <h3>Move your mouse over Kelce to celebrate</h3>");
    $("#football").css("top", "-153px");
    $("#football").css("right", "-520px")
    $("#pat").attr("src","http://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F1231%2Fr308814_1296x729_16%2D9.jpg")
})

$("#kelce").mouseenter(function(){
    $("#football").hide()
    $(".header").html("<h1>Click the button to get a stop on Defense</h1><button class='defense'>Go</button>");
    $("#pat").attr("src", "https://media2.giphy.com/media/555q2l80FiU5K8SlFH/200w.webp?cid=3640f6095c173ca333682f66595b94b5");
    $("#kelce").attr("src", "https://media1.giphy.com/media/3o7TKLzkUorz9C3VrG/200w.webp?cid=3640f6095c173c12596d4b6a2e30b95d");
})

$(".header").click(function(){
    $(".header").html("<h1>Double Click Tom Brady to sack him!</h1>");
    $("#pat").attr("src","https://scottamyx.com/wp-content/uploads/2018/02/Tom-Brady.jpg");
    $("#kelce").attr("src","http://specials-images.forbesimg.com/imageserve/5751db174bbe6f038783c70a/416x416.jpg?background=000000&cropX1=21&cropX2=643&cropY1=16&cropY2=638");
    $(".kelce").html("<img class='player' src='http://specials-images.forbesimg.com/imageserve/5751db174bbe6f038783c70a/416x416.jpg?background=000000&cropX1=21&cropX2=643&cropY1=16&cropY2=638'>");
})

$("#pat").dblclick(function(){
    $("#pat").slideUp()
    $(".kelce").html("<img src='https://i.ytimg.com/vi/FRBMvXk7egk/hqdefault.jpg'>");
    $(".kelce").css("margin-right", "236px")
    $(".header").html("<h1>GOT HIM!</h1>")
})

