//Jquery portfolio section tabs
jQuery(function(){
    jQuery('#showall').click(function(){
          jQuery('.targetDiv').show();
   });
   jQuery('.showSingle').click(function(){
         jQuery('.targetDiv').hide();
         jQuery('#div'+$(this).attr('target')).show();
   });
});