/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #butao_home */
    
    
        /* button  #butao_sobre */
    
    
        /* button  #butao_imc */
    $(document).on("click", "#butao_imc", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_imc"); 
    });
    
        /* button  #butao_sobre */
    
    
        /* button  #butao_contato */
    $(document).on("click", "#butao_contato", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_contato"); 
    });
    
        /* button  #butao_sobre */
    
    
        /* button  #butao_sobre */
    $(document).on("click", "#butao_sobre", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_sobre"); 
    });
    
        /* button  #butao_sobre */
    $(document).on("click", "#butao_sobre", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_sobre"); 
    });
    
        /* button  #butao_home */
    $(document).on("click", "#butao_home", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_67_16"); 
    });
    
        /* button  #butao_dietas */
    $(document).on("click", "#butao_dietas", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_dietas"); 
    });
    
        /* button  #butao_informativo */
    $(document).on("click", "#butao_informativo", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#pg_informativo"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
