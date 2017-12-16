$( function() {
    $( "#draggable" ).draggable({
      axis: "x",
      drag: function( event, ui ) {
        $(this).mouseup(function() {
            console.log(ui.originalPosition.left > ui.position.left ?  'succesfully disliked the image:'+$('img',this).attr('src') : 'succesfully liked the image'+$('img',this).attr('src'));
            $(this).remove();      
        });
      }
    });
  });