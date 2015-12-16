
var links = {
  "tile-1": ["hi, i'm david ma","index.html"],
  "tile-2": ["about me", "about.html"],
  "tile-3": ["contact me", "contact.html"],
  "tile-4": ["resume", "resume.html"],
  "tile-5": ["projects","projects/index.html"],
  "tile-6": ["blog","blog/index.html"]
}

$("div.hover-box").mouseenter(
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

$("div.hover-box").mouseleave(
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
