(function($) {
  $.fn.backgroundor = function(type, options) {
    var type    = typeof type    !== 'undefined' && type.constructor    === String ? type    : 'opacity';
    var options = typeof options !== 'undefined' && options.constructor === Object ? options : {};

    /*** default values ***/
    var opacityval    = 0; // opacity value
    var intervaltime  = 100; // interval value
    var values        = [0,51,75]; // default values for the linear gradient
    var colors        = ['#499bea','#207ce5','#1679e3']; // default colors for the linear gradient
    var color         = '#000000'; // default color for opacity animation
    var animspeed     = 'linear'; // default animation curve
    var animdegree    = '90deg'; // default linear-gradient degree
    /*** default values ***/

    options.intervaltime  = options.intervaltime  ? options.intervaltime  : intervaltime;
    options.opacityval    = options.opacityval    ? options.opacityval    : opacityval;
    options.values        = options.values        ? options.values        : values;
    options.colors        = options.colors        ? options.colors        : colors;
    options.color         = options.color         ? options.color         : color;
    options.animspeed     = options.animspeed     ? options.animspeed     : animspeed;
    options.animdegree    = options.animdegree    ? options.animdegree    : animdegree;

    var reverse = false; // to control opacity
    if(options.opacityval === 0 || options.opacityval === false){
      reverse  = false;
    }
    else {
      reverse  = true;
    }

    var transitionStr  = 'background ' + options.intervaltime/1000 + 's ' + options.animspeed;

    if(type === 'opacity'){
      /* turn hexadecimal color to rgb */
      var opColor = convertHex(options.color);
    }

    /* this function is written by @subodhghulaxe */
    function convertHex(hex) {
      hex = hex.replace('#','');
      var r = parseInt(hex.substring(0,2), 16);
      var g = parseInt(hex.substring(2,4), 16);
      var b = parseInt(hex.substring(4,6), 16);

      var result = 'rgba(' + r + ',' + g + ',' + b + ', ';
      return result;
    }

    /*** choose the type of the animation ***/
    switch(type) {
      case "opacity":
        backOpacity(this);
        break;
      case "lgradient":
        backGradient(this);
        break;
      default:
        backOpacity(this);
        break;
    }
    /*** choose the type of the animation ***/

    /*** the opacity animation function ***/
    function backOpacity(elem) {
      $(elem).css({
        '-webkit-transition' : transitionStr,
        '-moz-transition'    : transitionStr,
        '-o-transition'      : transitionStr,
        'transition'         : transitionStr
      });
      setInterval(function() {
        if(reverse === false) {
          options.opacityval += 1;
        }
        else if(reverse === true) {
          options.opacityval -= 1;
        }
        if(options.opacityval <= 0) {reverse = false;}
        if(options.opacityval >= 1) {reverse = true;}

        var color = opColor + options.opacityval + ")";
        $(elem).css({
          'background':color,
          '-webkit-transform'  : 'translate3d(0,0,0)',
          '-moz-transform'     : 'translate3d(0,0,0)',
          '-ms-transform'      : 'translate3d(0,0,0)',
          '-o-transform'       : 'translate3d(0,0,0)',
          'transform'          : 'translate3d(0,0,0)'
        });
      }, options.intervaltime);
    }
    /*** the opacity animation function ***/

    /*** the gradient animation function ***/
    function backGradient(elem) {
      setInterval(function(){
        for (var i = 0; i < options.values.length; i++) {
          if(options.values[i] < 100){
            options.values[i] += 1;
          }
          else {
            if(options.values[options.values.length - 2] == options.values[options.values.length - 1]){
              options.values.unshift(0);
              lastcolor = options.colors[options.colors.length - 1];
              options.colors.unshift(lastcolor);
              options.values.pop();
              options.colors.pop();
            }
          }
        }

        var color1 = '-webkit-linear-gradient(' + options.animdegree + ',' + options.colors[options.colors.length - 1] + ' ' + '0%';
        var color2 = '-moz-linear-gradient(' + options.animdegree + ',' + options.colors[options.colors.length - 1] + ' ' + '0%';
        var color3 = '-o-linear-gradient(' + options.animdegree + ',' + options.colors[options.colors.length - 1] + ' ' + '0%';
        var color4 = 'linear-gradient(' + options.animdegree + ',' + options.colors[options.colors.length - 1] + ' ' + '0%';
        for (var i = 0; i < options.colors.length; i++) {
          color1 = color1 + ', ' + options.colors[i] + ' ' + options.values[i] + '%';
          color2 = color2 + ', ' + options.colors[i] + ' ' + options.values[i] + '%';
          color3 = color3 + ', ' + options.colors[i] + ' ' + options.values[i] + '%';
          color4 = color4 + ', ' + options.colors[i] + ' ' + options.values[i] + '%';
        }
        color1 += ') center';
        color2 += ') center';
        color3 += ') center';
        color4 += ') center';

        $(elem).css({
          'background': color1,
          'background': color2,
          'background': color3,
          'background': color4,
          'background-size' : '130% 130%',
          '-webkit-transform'  : 'translate3d(0,0,0)',
          '-moz-transform'     : 'translate3d(0,0,0)',
          '-ms-transform'      : 'translate3d(0,0,0)',
          '-o-transform'       : 'translate3d(0,0,0)',
          'transform'          : 'translate3d(0,0,0)'
        });
      }, options.intervaltime);
    }
    /*** the gradient animation function ***/

  };
})(jQuery);
