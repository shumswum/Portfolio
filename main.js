$(document).ready(() => {
  $.fn.isOnScreen = function() {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom
    );
  };

  if ($(".landing").isOnScreen()) {
    $(".navbar").hide();
  }
  
  $(window).scroll(() => {
    if ($(".landing").isOnScreen()) {
      $(".navbar").hide();
    } else {
      $(".navbar").show();
    }
  });
  $(".about-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top - 60
      },
      500
    );
  });

  $(".skills-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".skills").offset().top - 60
      },
      500
    );
  });

  $(".portfolio-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".portfolio").offset().top - 60
      },
      500
    );
  });

  $(".contact-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".contact").offset().top - 60
      },
      500
    );
  });

  $(".home-link").click(() => {
    $("html, body").animate(
      {
        scrollTop: $(".landing").offset().top
      },
      500
    );
  });

  $(".fa-arrow-circle-down").click(() => {
    $("html, body").animate(
        {
            scrollTop: $(".about").offset().top - 60
        },
        500
    );
  });

  $('.teletype').hover(
    () => {
      $('.teletype').append($("<h1 class=\"centered\">Origin Teletype Tool</h1>"));
      $('.teletype').append($("<h4 class=\"below-centered\">Click to demo!</h4>"));
    }, () => {
      $('.teletype').find("h1:last").remove();
      $('.teletype').find("h4:last").remove();
    }
  );

  $('.vehicle').hover(
    () => {
      $('.vehicle').append($("<h1 class=\"centered\">Vehicle Manager</h1>"));
      $('.vehicle').append($("<h4 class=\"below-centered\">Click to demo!</h4>"));
    }, () => {
      $('.vehicle').find("h1:last").remove();
      $('.vehicle').find("h4:last").remove();
    }
  );

  $('.mealhouse').hover(
    () => {
      $('.mealhouse').append($("<h1 class=\"centered\">Mealhouse</h1>"));
      $('.mealhouse').append($("<h4 class=\"below-centered\">Click to demo!</h4>"));
    }, () => {
      $('.mealhouse').find("h1:last").remove();
      $('.mealhouse').find("h4:last").remove();
    }
  );

  $('.vstda').hover(
    () => {
      $('.vstda').append($("<h1 class=\"centered\">Very Simple Todo App</h1>"));
      $('.vstda').append($("<h4 class=\"below-centered\">Click to demo!</h4>"));
    }, () => {
      $('.vstda').find("h1:last").remove();
      $('.vstda').find("h4:last").remove();
    }
  );
});
