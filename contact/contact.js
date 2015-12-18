$("div.hover-box").on("mouseenter click",
    function() {
      $("div.opacity", this).css({"opacity": "0.2"});
      $("div.index-tile", this).css({
        "-webkit-transform": "scale(1.1, 1.1)",
        "-moz-transform": "scale(1.1, 1.1)",
        "-ms-transform": "scale(1.1, 1.1)",
        "-o-transform": "scale(1.1, 1.1)",
        "transform": "scale(1.1, 1.1)"
      })
    });

$("div.hover-box").on("mouseleave click",
    function() { 
      $("div.opacity", this).css({"opacity": "0.6"});
      $("div.index-tile", this).css({
        "-webkit-transform": "scale(1.0, 1.0)",
        "-moz-transform": "scale(1.0, 1.0)",
        "-ms-transform": "scale(1.0, 1.0)",
        "-o-transform": "scale(1.0, 1.0)",
        "transform": "scale(1.0, 1.0)"
      });
    });
