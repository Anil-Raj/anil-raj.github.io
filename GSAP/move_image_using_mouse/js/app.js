//$(document).ready(function(){
//	startTween();
//});
function startTween(){
	TweenLite.to($("#toolbox"),1,{x:250,y:250});
}
$(function() {
<<<<<<< HEAD
$("body").mousemove(function(e) {
  TweenLite.to($("#toolbox"),1,{x:e.pageX-90,y:e.pageY-70});
=======
$("body").touchmove(function(e) {

  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);

  //alert("X: " + relativeX + "  Y: " + relativeY);
  TweenLite.to($("#toolbox"),0,{x:e.pageX-90,y:e.pageY-70});
>>>>>>> 64af0b4c9e0a91dd67030b444ce352a4fe13141e
});
});
//document.addEventListener("DOMContentLoaded",function(){
//	alert("Pure JS ready");
//});