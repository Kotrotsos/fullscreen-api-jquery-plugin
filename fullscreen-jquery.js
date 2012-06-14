/*! http://kotrotsos.com fullscreen API Plugin v1.0.0 by @kotrotsos 14-06-2012 */
/*

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

!!(function($){
    var prefix;
    var fs = {
      supported: (function() {
          var prefixes = 'webkit,moz,ms,o'.split(',');
          var supported = false;
          $.each(prefixes, function(index, pf) {
              if (typeof document[pf + 'CancelFullScreen' ] != 'undefined' ) {
                  supported = true;
                  prefix = pf;
              }
          });
          return supported;
      }),
      requestFullscreen: (function(el) {
          // Do the prefix dance.
          if(this.supported) {
              if ((document.fullScreenElement && document.fullScreenElement !== null) ||
                  (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                  if (el.requestFullScreen) {
                      el.requestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                  } else if (el.mozRequestFullScreen) {
                      el.mozRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                  } else if (el.webkitRequestFullScreen) {
                      el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                  }
              }
          }
      }),
      exitFullscreen:function () {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
      }
    }
    if (typeof jQuery != 'undefined') {
        jQuery.fn.requestFullScreen = function() {
            return this.each(function() {
                    fs.requestFullscreen(this);
            });
        };
        jQuery.cancelFullScreen = function () {
               fs.exitFullscreen();
        };
    }
})(jQuery)
