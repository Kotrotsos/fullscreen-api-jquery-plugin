fullscreen-api-jquery-plugin
============================

Fullscreen jQuery Plugin

To use:

To go fullscreen on an element, you need to bind it to a user event first. 

Given this HTML

    <div id="fsthis">This element will go fullscreen  
    <button id="cafs">Cancel Fullscreen</button></div>
    <button id="gofs">Go Fullscreen</button>

To go fullscreen on the element #fsthis:

    $('#gofs').click(function(){
        $('#fsthis').requestFullScreen();
    })

To cancel fullscreen mode- do:

    $.cancelFullScreen();
    
  



