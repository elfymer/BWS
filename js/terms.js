(function() {


  $(document).ready(function(){
     onCarouselLoad();
     $carousel-viewport.on('change', onCarouselLoad);
  });


  var onCarouselLoad = function(){
    var startPoint = $totd.getStyle('left');
    
  	$bPost1.css('left', startPoint * 0.12);
    $bPost4.css('left', 300);
    
  	$bPost2.css('right', -200);
    $bPost3.css('right', startPoint * 0.12);
    
    show("load");
  };




})();