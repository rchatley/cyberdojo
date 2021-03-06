/*global $,cyberDojo*/

var cyberDojo = (function(cd, $) {
  "use strict";

  cd.dialog_noId = function() {
    var noId = 
      '<div class="panel">'
      + '<table>'
      +    '<tr>'
      +      '<td>'
      +        'Click'
      +          ' <div id="setup" class="button">setup</div> '
      +        'to get a new id.<br/>'
      +      '</td>'
      +    '</tr>'
      +  '</table>'
      + '</div>';
    var width = 400;
    return cd.dialog(noId, width, '');    
  };

  return cd;
})(cyberDojo || {}, $);
