$(window).load(function(){
  $(".tumbnail-image img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});