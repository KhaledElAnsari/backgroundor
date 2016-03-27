(function($) {
  $.fn.backgroundor = function(type){
    this.css({
      '-webkit-transition':'background 0.1s linear',
      '-moz-transition':'background 0.1s linear',
      '-o-transition':'background 0.1s linear',
      'transition':'background 0.1s linear',
    });

    /*** default values ***/
    opacityval    = 0; // opacity value
    intervaltime  = 100; // interval value
    reverse       = false; // for opacity, false means to start alpha equals to one
    values        = [0,50,100]; // default values for the linear gradient
    colors        = ['#1e5799','#2989d8','#7db9e8']; // default colors for the linear gradient
    /*** default values ***/

    /*** choose the type of the animation ***/
    switch(type) {
      case "opacity":
        backOpacity(this);
        break;
      case "gradient":
        backGradient(this);
        break;
      default:
        backOpacity(this);
        break;
    }
    /*** choose the type of the animation ***/

    /*** the opacity animation function ***/
    function backOpacity(elem){
      setInterval(function(){
        if(opacityval < 1 && reverse == false){
          opacityval += 0.1;
        }
        else if(reverse == true){
          opacityval -= 0.1;
        }
        if(opacityval <= 0) {reverse = false;}
        if(opacityval >= 1) {reverse = true;}

        var color = "rgba(0, 0, 0, " + opacityval + ")";
        $(elem).css({
          'background':color,
        });
      }, intervaltime);
    };
    /*** the opacity animation function ***/

    /*** the gradient animation function ***/
    function backGradient(elem){
      setInterval(function(){
        for (var i = 0; i < values.length; i++) {
          if(values[i] < 100){
            values[i] += 1;
          }
          else {
            if(values[values.length - 2] == values[values.length - 1]){
              values.unshift(0);
              lastcolor = colors[colors.length - 1];
              colors.unshift(lastcolor);
              values.pop();
              colors.pop();
            }
          }
        }

        var color = 'linear-gradient(to right,' + colors[colors.length - 1] + ' ' + '0%';
        for (var i = 0; i < colors.length; i++) {
          color = color + ', ' + colors[i] + ' ' + values[i] + '%';
        }
        color += ')';

        $(elem).css({
          'background':color,
        });
      }, intervaltime);
    };
    /*** the gradient animation function ***/

  }
})(jQuery);
