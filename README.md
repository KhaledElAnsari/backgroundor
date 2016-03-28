# Backgroundor
Backgroundor is a jQuery plugin made to be the Background Animator and that's where the name came from!, this plugin is originally made to ease the pain of the `linear-gradient` animation.

# Examples
  To see the plugin in action go to [Backgroundor Plugin Page](http://khaledelansari.com/backgroundor/). You'll find some examples and some cool ideas for using this plugin.

# Installation
  This plugin depends on **jQuery** only (any version above/equal 1.7 will be ok), so all you have to do is the following:
  ```
  <script type="text/javascript" src="/js/jQuery191.js"></script>
  <script type="text/javascript" src="/js/backgroundor.jquery.js"></script>
  ```
  Soon there will be a **Vanilla JS** version of it.

# API Reference
  You can call **Backgroundor** without any parameters like this `$('#div').backgroundor();` it will run with the default values.

  Other than that **Backgroundor** takes two parameters and it would look like this `$('#div').backgroundor(type, options);` Where:
  - `type` is a **String** to define the type of the animation
  - `options` is a **JSON Object** to specify the colors, intervaltime, animation curve, ..etc.

  ###### type
  The types of animation are:
  - `'opacity'` for opacity animation, it's the **Default**.
  - `'lgradient'` for linear-gradient animation
  - `'rgradient'` coming soon for radial-gradient animation

  ###### options
  Options is an object with following elements:
  ```javascript
  options = {
    opacityval    : 0; // int, only 1 or 0 are accepted now (can be boolean too)
    intervaltime  : 100; // int, interval time value
    values        : [0,51,75]; // array of int, default percentage values for the linear gradient colors
    colors        : ['#499bea','#207ce5','#1679e3']; // array of string (hex values), default colors for the linear gradient
    color         : '#000000'; // string (hex value), default color for opacity animation
    animspeed     : 'linear'; // string, default animation curve
    animdegree    : '90deg'; // string, default linear-gradient degree
  }
  ```

# How to Use it
  It's easy like every jQuery plugin, just print the following:
  `$('#div').backgroundor();`
  The default will opacity animation with `100ms` speedtime, to change the defaults look at the [API Reference](https://github.com/KhaledElAnsari/backgroundor#api-reference) for more information.

# Work in progress
  In the future I'll be adding a function for the radial-gradient animation and of course some enhancements.
