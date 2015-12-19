var descriptions = {
  "about-1": "Hi, I'm David. I grew up in the great state of Ohio in the suburbs of Columbus, where I was raised by this wonderful woman (and my dad, not pictured). They were lucky enough to gift me with a sassy sister.",
  "about-2": "My parents still call Ohio home, and I return a few times a year to see family, catch up with friends (especially these guys), and watch Ohio State beat Michigan annually.",
  "about-3": "I moved to the Chicagoland area for college and graduated (with these brainiacs) from Northwestern with a degree in MMSS and Economics. It's here I discovered my interest in entrepreneurship and came to terms with my lack of athleticism.",
  "about-4": "After graduation, I joined BCG in Chicago and started my career as a consultant. Through this experience, I've met phenomenal folks and enjoyed the perks of pretending to be an adult (like attending this company holiday party).",
  "about-5": "Though BCG made me the professional I am today, I wanted to scratch the entrepreneurship itch and joined ContextMedia (health-tech) in Chicago, which further sparked my interest in technology.",
  "about-6": "I recently left my job to start learning the toolkit of a software developer, enrolling in Dev Bootcamp in Chicago. I've spent my days making this website while coffee shop hopping (this spot is my absolute favorite!).",
  "about-7": "I try to spend my spare time with my favorite people, while exploring what the world has to offer. This picture is from the top of Buena Vista park in San Francisco, where I recently visited friends.",
  "about-8": "I enjoy the great outdoors, where skiing is a particular favorite. Every year, I try to go west at least once to see the Rockies and time the trip with a fresh powder drop.",
  "about-9": "I've been fortunate enough to travel and see new parts of the world every so often (this is taken on a recent trip to Paris). Next stop is Iceland, where I'm hoping to fulfill my dream of seeing the Northern Lights.",
  "about-10": "I also love (and spend a disproportionate amount of my income on) food, with a particular eye toward those who dream up dishes I could've never imagined. Girl and the Goat is a Chicago and personal favorite.", 
  "about-11": "When not injuring myself, I like to play ping pong, where (if I may brag) I was a company champion. Not pictured is my love of golf, which my father taught me when I was much younger.",
  "about-12": "And finally, I really enjoy live music. I try and see a show every couple months, especially during the summer months. One of my favorite groups, CHVRCHES, did a great set at the Pitchfork Festival in Chicago!"
}

$("div.hover-box").on("mouseenter click",
    function() {
      var linkKey = $("div.index-tile",this).attr('id');
      $("div.table-cell", this).html('<div class="about-me">' + descriptions[linkKey] + '</div>');
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
      $("div.table-cell", this).html('');
      $("div.opacity", this).css({"opacity": "0.6"});
      $("div.index-tile", this).css({
        "-webkit-transform": "scale(1.0, 1.0)",
        "-moz-transform": "scale(1.0, 1.0)",
        "-ms-transform": "scale(1.0, 1.0)",
        "-o-transform": "scale(1.0, 1.0)",
        "transform": "scale(1.0, 1.0)"
      });
    });
