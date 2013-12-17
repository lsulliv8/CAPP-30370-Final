window.onload = function(){
var $windowidth = $(window).width() ;
  console.log("Initial Window Width:" +$windowidth
  )};

$(window).resize(function(){
  var $windowidth = $(window).width();
  $('width').text($windowidth)
  console.log("Window Width:" + $windowidth)
  });
  
$('img').on("click", function() {
	console.log("Image alt:" + this.getAttribute('alt'));
	console.log("Image width:" + $(this).css("width"));
	console.log("Image height:" + $(this).css("height"));
});

$('header').on("click", function() {
	console.log("Header Text:" + $(this).text());
	console.log("Header Color:" + $(this).css("color"));
	console.log("Header Font-Size:" + $(this).css("font-size"));
});