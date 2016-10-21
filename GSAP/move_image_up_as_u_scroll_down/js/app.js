$(document).ready(function(){
	//startTween();
});
//function startTween(){
//	TweenLite.to($("#toolbox"),1,{x:250,y:250});
//}
$(function() {
$("body").mousemove(function(e) {

  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
  var scroll_pos = $('body').scrollTop();

  //alert("X: " + relativeX + "  Y: " + relativeY);
  TweenLite.to($("#toolbox"),1,{x:250,y:scroll_pos+200});
});
});
