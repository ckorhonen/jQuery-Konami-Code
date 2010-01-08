jQuery.fn.konami = function(fn){
  if(fn == undefined){
    $(document).unbind('keydown');
  } else {
      var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65"; 
  
      $(document).keydown(function(e){ 
          kkeys.push( e.keyCode ); 
          var location = $('body').attr('id') || document.location.href
          if ( kkeys.toString().indexOf( konami ) >= 0 ){ 
              $(document).unbind('keydown',arguments.callee); 
              fn();
          } 
      }); 
    }
}
