(function($, exports) {
  $(function() {
     var ws = new WebSocket("ws://localhost:9999");
     ws.onmessage = function(e) {
       var files = JSON.parse(e.data)
         , packaged = {};
       $.map(files, function(el) {
           var pkg = el.file.split(".", 1);
           packaged[pkg] = (packaged[pkg] || []).concat([el.output]);
       }); 
       Object.keys(packaged).map(function(key, index) {
         console.log(key);
         $("#" + key).text(packaged[key].join("\n"));
       });
     };    
  })
})(jQuery, window);
