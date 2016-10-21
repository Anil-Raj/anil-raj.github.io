//$(document).ready(function(){
//	startTween();
//});
function startTween(){
	TweenLite.to($("#toolbox"),1,{x:250,y:250});
}
$(function() {
$("body").mousemove(function(e) {
  TweenLite.to($("#toolbox"),1,{x:e.pageX-90,y:e.pageY-70});
});
});
//document.addEventListener("DOMContentLoaded",function(){
//	alert("Pure JS ready");
//});