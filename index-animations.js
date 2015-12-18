
var links = {
  "tile-1": ["Hi, I'm David Ma","index.html"],
  "tile-2": ["About Me", "about/about.html"],
  "tile-3": ["Contact Me", "contact/contact.html"],
  "tile-4": ["Resume", "resume/resume.html"],
  "tile-5": ["Projects","projects/index.html"],
  "tile-6": ["Blog","blog/index.html"]
}

$("div.hover-box").on("mouseenter click",
    function() {
      var linkKey = $("div.index-tile",this).attr('id');
      $("div.table-cell", this).html('<a href="' + links[linkKey][1] + '"><div class="index-button">' + links[linkKey][0] + '</div></a>');
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
      var linkKey2 = $("div.index-tile",this).attr('id');
      $("a", this).html('<p>' + links[linkKey2][0] + '</p>');
      $("div.opacity", this).css({"opacity": "0.6"});
      $("div.index-tile", this).css({
        "-webkit-transform": "scale(1.0, 1.0)",
        "-moz-transform": "scale(1.0, 1.0)",
        "-ms-transform": "scale(1.0, 1.0)",
        "-o-transform": "scale(1.0, 1.0)",
        "transform": "scale(1.0, 1.0)"
      });
    });
